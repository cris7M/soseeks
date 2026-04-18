/**
 * Gen AI Bootcamp — step-by-step reader (client-side only).
 * Expects .bootcamp-step elements and #stepLabel, #progressBar, #btnPrev, #btnNext.
 */
(function () {
    const steps = Array.from(document.querySelectorAll('.bootcamp-step'));
    const label = document.getElementById('stepLabel');
    const bar = document.getElementById('progressBar');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    let index = 0;

    function total() {
        return steps.length;
    }

    function render() {
        steps.forEach((el, i) => {
            el.classList.toggle('d-none', i !== index);
        });
        const n = index + 1;
        const t = total();
        if (label) label.textContent = 'Step ' + n + ' / ' + t;
        if (bar) bar.style.width = (100 * n) / t + '%';
        if (btnPrev) btnPrev.disabled = index === 0;
        if (btnNext) {
            btnNext.textContent = n === t ? 'Start over' : 'Next';
        }
    }

    function go(delta) {
        const t = total();
        index = Math.max(0, Math.min(t - 1, index + delta));
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (btnPrev) btnPrev.addEventListener('click', () => go(-1));
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (index < total() - 1) go(1);
            else {
                index = 0;
                render();
            }
        });
    }

    render();
})();

function bootcampSignOut() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'access.html';
}
