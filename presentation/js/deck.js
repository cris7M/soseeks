const SLIDES = [
  { id: 1, title: "Cover" },
  { id: 2, title: "Our Story" },
  { id: 3, title: "The Problem" },
  { id: 4, title: "The Solution" },
  { id: 5, title: "Product Ecosystem" },
  { id: 6, title: "Chat2Bill" },
  { id: 7, title: "RagBook" },
  { id: 8, title: "Market Opportunity" },
  { id: 9, title: "Business Model" },
  { id: 10, title: "Competitive Advantage" },
  { id: 11, title: "Current Progress" },
  { id: 12, title: "Roadmap" },
  { id: 13, title: "Funding Ask" },
  { id: 14, title: "Closing" },
    ];

let current = 0;
const total = SLIDES.length;
const imageCache = new Map();

const slideEls = () => document.querySelectorAll(".slide");
const thumbEls = () => document.querySelectorAll(".thumb");

function goTo(index) {
  if (index < 0 || index >= total) return;
  current = index;

  slideEls().forEach((el, i) => el.classList.toggle("active", i === current));
  thumbEls().forEach((el, i) => el.classList.toggle("active", i === current));

  document.getElementById("slideCounter").textContent = `${current + 1} / ${total}`;
  document.getElementById("prevBtn").disabled = current === 0;
  document.getElementById("nextBtn").disabled = current === total - 1;
  document.getElementById("progressBar").style.width = `${((current + 1) / total) * 100}%`;

  const activeThumb = document.querySelector(".thumb.active");
  if (activeThumb) activeThumb.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

function togglePresent() {
  document.body.classList.toggle("present-mode");
  const btn = document.getElementById("presentBtn");
  btn.textContent = document.body.classList.contains("present-mode") ? "Exit Present" : "Present";
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

function hideExportChrome() {
  const hidden = [];
  [".nav-arrow", ".progress-bar", ".slide-num-badge"].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.dataset.wasVisible = el.style.visibility;
      el.style.visibility = "hidden";
      hidden.push(el);
    });
  });
  return hidden;
}

function restoreExportChrome(hidden) {
  hidden.forEach((el) => {
    el.style.visibility = el.dataset.wasVisible || "";
  });
}

function waitForImages(root) {
  return Promise.all(
    [...root.querySelectorAll("img")].map(async (img) => {
      const src = img.getAttribute("src");
      if (!src) return;

      const cached = imageCache.get(src);
      if (cached) {
        img.src = cached;
        return;
      }

      if (img.complete && img.naturalWidth > 0) return;

      await new Promise((resolve) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
        if (img.src !== src) img.src = src;
      });
    })
  );
}

async function preloadSlideImages() {
  const sources = [...new Set([...document.querySelectorAll(".slide img[src]")].map((img) => img.getAttribute("src")))];

  async function cacheFromFetch(src) {
    const response = await fetch(src);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async function cacheFromImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext("2d").drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/jpeg", 0.92));
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  await Promise.all(
    sources.map(async (src) => {
      if (!src || imageCache.has(src)) return;

      try {
        const dataUrl = await cacheFromFetch(src);
        imageCache.set(src, dataUrl);
      } catch {
        try {
          const dataUrl = await cacheFromImage(src);
          imageCache.set(src, dataUrl);
        } catch (err) {
          console.warn("Image preload failed:", src, err);
        }
      }
    })
  );

  document.querySelectorAll(".slide img[src]").forEach((img) => {
    const src = img.getAttribute("src");
    const cached = imageCache.get(src);
    if (cached) img.src = cached;
  });
}

function applyCachedImages(clone) {
  clone.querySelectorAll("img[src]").forEach((img) => {
    const src = img.getAttribute("src");
    const cached = imageCache.get(src);
    if (cached) img.src = cached;
    img.style.opacity = "1";
    img.style.visibility = "visible";
    img.style.display = "block";
  });
}

function fixGradientText(el, color) {
  el.style.background = "none";
  el.style.backgroundClip = "border-box";
  el.style.webkitBackgroundClip = "border-box";
  el.style.webkitTextFillColor = color;
  el.style.color = color;
}

function fixCloneForExport(_doc, clone) {
  clone.style.opacity = "1";
  clone.style.transform = "none";
  clone.style.pointerEvents = "auto";
  clone.style.transition = "none";
  clone.style.animation = "none";

  clone.querySelectorAll("*").forEach((el) => {
    el.style.animation = "none";
    el.style.transition = "none";
  });

  clone.querySelectorAll(
    ".card, .highlight-box, .founder-card, .milestone-item, .roadmap-phase, .funding-row, .base-card, .contact-card, .cover-card, .closing-card, .text-block, .bullet-list li, .pill, .pricing-tag, .quote-box, .grid-2, .grid-3, .slide-body, .slide-inner"
  ).forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });

  clone.querySelectorAll(".card, .highlight-box, .founder-card, .base-card, .contact-card").forEach((el) => {
    el.style.background = "rgba(15, 15, 35, 0.95)";
    el.style.border = "1px solid rgba(99, 102, 241, 0.35)";
  });

  clone.querySelectorAll(".brand-logo").forEach((el) => fixGradientText(el, "#a78bfa"));
  clone.querySelectorAll(".slide-header h2, .slide-cover h1").forEach((el) => fixGradientText(el, "#e2e8f0"));
  clone.querySelectorAll(".slide-cover .subtitle, .slide-closing h2").forEach((el) => fixGradientText(el, "#c084fc"));
  clone.querySelectorAll(".slide-header .label, .section-label").forEach((el) => {
    el.style.color = "#818cf8";
  });
  clone.querySelectorAll(".card h4, .highlight-box h4, .founder-card h4").forEach((el) => {
    el.style.color = "#e2e8f0";
  });
  clone.querySelectorAll(".card p, .text-block, .highlight-box p, .founder-card p").forEach((el) => {
    el.style.color = "#94a3b8";
  });
  clone.querySelectorAll(".bullet-list li").forEach((el) => {
    el.style.color = "#cbd5e1";
  });

  applyCachedImages(clone);

  clone.querySelectorAll(".chat2bill-figure, .chat2bill-img").forEach((el) => {
    el.style.opacity = "1";
    el.style.visibility = "visible";
    el.style.transform = "none";
  });
}

async function renderSlideToCanvas(target, scale) {
  return html2canvas(target, {
    scale,
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#0a0a1a",
    logging: false,
    imageTimeout: 15000,
    width: target.offsetWidth,
    height: target.offsetHeight,
    onclone: fixCloneForExport,
  });
}

async function captureSlide(index, scale = 2) {
  const slides = slideEls();
  const target = slides[index];
  if (!target) return null;

  const wasActive = target.classList.contains("active");
  slides.forEach((s, i) => s.classList.toggle("active", i === index));

  document.body.classList.add("export-mode");
  const hidden = hideExportChrome();

  try {
    await preloadSlideImages();
    await waitForImages(target);

    // Apply cached image data to live slide before capture (helps Chat2Bill dashboard slide)
    target.querySelectorAll("img[src]").forEach((img) => {
      const src = img.getAttribute("src");
      const cached = imageCache.get(src);
      if (cached) img.src = cached;
    });

    // Let export-mode styles apply and layout settle before capture
    await new Promise((r) => setTimeout(r, 500));

    try {
      return await renderSlideToCanvas(target, scale);
    } catch (err) {
      console.warn(`Slide ${index + 1}: retrying export at lower resolution`, err);
      return await renderSlideToCanvas(target, 1);
    }
  } finally {
    restoreExportChrome(hidden);
    document.body.classList.remove("export-mode");
    if (!wasActive) slides.forEach((s, i) => s.classList.toggle("active", i === current));
  }
}

function addCanvasToPdf(pdf, canvas, isFirstPage) {
  const w = canvas.width;
  const h = canvas.height;
  let imgData;
  let format = "PNG";

  try {
    imgData = canvas.toDataURL("image/png", 1.0);
  } catch {
    imgData = canvas.toDataURL("image/jpeg", 0.92);
    format = "JPEG";
  }

  if (isFirstPage) {
    pdf = new window.jspdf.jsPDF({
      orientation: w >= h ? "landscape" : "portrait",
      unit: "px",
      format: [w, h],
      compress: true,
    });
  } else {
    pdf.addPage([w, h], w >= h ? "landscape" : "portrait");
  }

  pdf.addImage(imgData, format, 0, 0, w, h, undefined, "SLOW");
  return pdf;
}

async function downloadCurrentSlide(format = "png") {
  showToast("Preparing slide download…");
  try {
    await preloadSlideImages();
    const canvas = await captureSlide(current, 2);
    if (!canvas) return;

    const name = `Soseeks_Slide_${String(current + 1).padStart(2, "0")}_${SLIDES[current].title.replace(/\s+/g, "_")}`;

    if (format === "png") {
      const link = document.createElement("a");
      link.download = `${name}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
      showToast(`Downloaded ${name}.png`);
    } else {
      const pdf = addCanvasToPdf(null, canvas, true);
      pdf.save(`${name}.pdf`);
      showToast(`Downloaded ${name}.pdf`);
    }
  } catch (e) {
    console.error(e);
    showToast("Download failed — try again");
  }
}

async function downloadAllSlides(format = "png") {
  const modal = document.getElementById("downloadModal");
  const fill = document.getElementById("modalProgressFill");
  const label = document.getElementById("modalLabel");
  modal.classList.add("open");
  fill.style.width = "0%";
  label.textContent = "Preloading images…";

  await preloadSlideImages();

  const savedCurrent = current;
  let pdf = null;
  let exportedCount = 0;
  let failedSlides = [];

  for (let i = 0; i < total; i++) {
    label.textContent = `Exporting slide ${i + 1} of ${total}…`;
    fill.style.width = `${((i + 1) / total) * 100}%`;

    try {
      const canvas = await captureSlide(i, 2);
      if (!canvas) {
        failedSlides.push(i + 1);
        continue;
      }

      exportedCount += 1;
      const name = `Soseeks_Slide_${String(i + 1).padStart(2, "0")}_${SLIDES[i].title.replace(/\s+/g, "_")}`;

      if (format === "png") {
        const link = document.createElement("a");
        link.download = `${name}.png`;
        link.href = canvas.toDataURL("image/png", 1.0);
        link.click();
        await new Promise((r) => setTimeout(r, 400));
      } else {
        try {
          pdf = addCanvasToPdf(pdf, canvas, pdf === null);
        } catch (pdfErr) {
          console.error(`Slide ${i + 1} PDF page failed:`, pdfErr);
          failedSlides.push(i + 1);
        }
      }
    } catch (e) {
      console.error(`Slide ${i + 1} failed:`, e);
      failedSlides.push(i + 1);
    }
  }

  if (format === "pdf" && pdf) {
    pdf.save("Soseeks_Pitch_Deck_2026.pdf");
  }

  goTo(savedCurrent);
  modal.classList.remove("open");

  if (failedSlides.length) {
    showToast(`Export incomplete — slides missing: ${failedSlides.join(", ")}`);
  } else {
    showToast(
      format === "pdf"
        ? `Downloaded Soseeks_Pitch_Deck_2026.pdf (${exportedCount} slides)`
        : `All ${exportedCount} slides exported as PNG`
    );
  }
}

function toggleDownloadMenu() {
  const menu = document.getElementById("downloadMenu");
  menu.hidden = !menu.hidden;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
  if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  if (e.key === "Home") { e.preventDefault(); goTo(0); }
  if (e.key === "End") { e.preventDefault(); goTo(total - 1); }
  if (e.key === "f" || e.key === "F") togglePresent();
  if (e.key === "Escape") document.body.classList.remove("present-mode");
});

document.addEventListener("click", (e) => {
  const menu = document.getElementById("downloadMenu");
  if (!e.target.closest("#downloadDropdown")) menu.hidden = true;
});

// Touch swipe
let touchStartX = 0;
document.querySelector(".viewer-inner")?.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.querySelector(".viewer-inner")?.addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 50) diff > 0 ? prev() : next();
}, { passive: true });

// Init
document.addEventListener("DOMContentLoaded", () => {
  goTo(0);

  document.getElementById("prevBtn").addEventListener("click", prev);
  document.getElementById("nextBtn").addEventListener("click", next);
  document.getElementById("presentBtn").addEventListener("click", togglePresent);

  thumbEls().forEach((el, i) => el.addEventListener("click", () => goTo(i)));

  document.querySelector(".nav-arrow.prev")?.addEventListener("click", prev);
  document.querySelector(".nav-arrow.next")?.addEventListener("click", next);

  document.getElementById("dlCurrentPng").addEventListener("click", () => { toggleDownloadMenu(); downloadCurrentSlide("png"); });
  document.getElementById("dlCurrentPdf").addEventListener("click", () => { toggleDownloadMenu(); downloadCurrentSlide("pdf"); });
  document.getElementById("dlAllPng").addEventListener("click", () => { toggleDownloadMenu(); downloadAllSlides("png"); });
  document.getElementById("dlAllPdf").addEventListener("click", () => { toggleDownloadMenu(); downloadAllSlides("pdf"); });
  document.getElementById("downloadToggle").addEventListener("click", toggleDownloadMenu);

  preloadSlideImages();
});
