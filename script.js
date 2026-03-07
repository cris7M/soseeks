/* ============================================
   SOSEEKS INDIA — Futuristic 3D Website JS
   ============================================ */

(function () {
    'use strict';

    // ── Preloader ──
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('preloader').classList.add('hidden');
        }, 800);
    });

    // ── Cursor Glow (desktop only) ──
    const cursorGlow = document.getElementById('cursor-glow');
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    } else {
        cursorGlow.style.display = 'none';
    }

    // ── Navbar Scroll Effect ──
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ── Mobile Menu ──
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ── Smooth Scroll ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Scroll Reveal ──
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ── Stat Counter Animation ──
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                animateCounter(el, target);
                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));

    function animateCounter(el, target) {
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    // ── Service Card Mouse Glow ──
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });

    // ── Contact Form ──
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<span>Sending...</span>';
        btn.disabled = true;

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(res => {
            if (res.ok) {
                btn.innerHTML = '<span>Message Sent! ✓</span>';
                btn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
                contactForm.reset();
            } else {
                btn.innerHTML = '<span>Failed — Try Again</span>';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #f59e0b)';
            }
        })
        .catch(() => {
            btn.innerHTML = '<span>Failed — Try Again</span>';
            btn.style.background = 'linear-gradient(135deg, #ef4444, #f59e0b)';
        })
        .finally(() => {
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        });
    });

    // ── Three.js 3D Particle Background ──
    function initHeroCanvas() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles
        const particleCount = 400;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const colorPalette = [
            new THREE.Color(0x6366f1),
            new THREE.Color(0x8b5cf6),
            new THREE.Color(0xc084fc),
            new THREE.Color(0x06b6d4),
            new THREE.Color(0x818cf8),
        ];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 160;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
            positions[i * 3 + 2] = -20 - Math.random() * 80;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 2 + 0.5;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.8,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Connecting Lines
        const lineGeom = new THREE.BufferGeometry();
        const linePositions = new Float32Array(300 * 6);
        lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMat = new THREE.LineBasicMaterial({
            color: 0x6366f1,
            transparent: true,
            opacity: 0.06,
            blending: THREE.AdditiveBlending,
        });
        const lines = new THREE.LineSegments(lineGeom, lineMat);
        scene.add(lines);

        // Floating Geometric Shapes
        const shapes = [];
        const shapeMaterial = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            wireframe: true,
            transparent: true,
            opacity: 0.04,
        });

        for (let i = 0; i < 6; i++) {
            let geom;
            const type = i % 3;
            if (type === 0) geom = new THREE.OctahedronGeometry(2 + Math.random() * 3, 0);
            else if (type === 1) geom = new THREE.IcosahedronGeometry(2 + Math.random() * 2, 0);
            else geom = new THREE.TetrahedronGeometry(2 + Math.random() * 3, 0);

            const mesh = new THREE.Mesh(geom, shapeMaterial.clone());
            mesh.position.set(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 80,
                -30 - Math.random() * 40
            );
            mesh.userData = {
                rotSpeed: { x: Math.random() * 0.005, y: Math.random() * 0.005 },
                floatSpeed: 0.001 + Math.random() * 0.002,
                floatOffset: Math.random() * Math.PI * 2,
            };
            scene.add(mesh);
            shapes.push(mesh);
        }

        // Mouse interaction
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Animation Loop
        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            particles.rotation.x = time * 0.02 + mouseY * 0.1;
            particles.rotation.y = time * 0.03 + mouseX * 0.1;

            const pos = geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                pos[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.003;
            }
            geometry.attributes.position.needsUpdate = true;

            // Update connecting lines
            let lineIdx = 0;
            const linePos = lineGeom.attributes.position.array;
            const maxDist = 12;
            for (let i = 0; i < Math.min(particleCount, 100); i++) {
                for (let j = i + 1; j < Math.min(particleCount, 100); j++) {
                    if (lineIdx >= 300) break;
                    const dx = pos[i * 3] - pos[j * 3];
                    const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                    const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < maxDist) {
                        linePos[lineIdx * 6] = pos[i * 3];
                        linePos[lineIdx * 6 + 1] = pos[i * 3 + 1];
                        linePos[lineIdx * 6 + 2] = pos[i * 3 + 2];
                        linePos[lineIdx * 6 + 3] = pos[j * 3];
                        linePos[lineIdx * 6 + 4] = pos[j * 3 + 1];
                        linePos[lineIdx * 6 + 5] = pos[j * 3 + 2];
                        lineIdx++;
                    }
                }
            }
            for (let i = lineIdx; i < 300; i++) {
                linePos[i * 6] = linePos[i * 6 + 1] = linePos[i * 6 + 2] = 0;
                linePos[i * 6 + 3] = linePos[i * 6 + 4] = linePos[i * 6 + 5] = 0;
            }
            lineGeom.attributes.position.needsUpdate = true;

            // Floating shapes
            shapes.forEach((s) => {
                s.rotation.x += s.userData.rotSpeed.x;
                s.rotation.y += s.userData.rotSpeed.y;
                s.position.y += Math.sin(time * s.userData.floatSpeed * 10 + s.userData.floatOffset) * 0.02;
            });

            renderer.render(scene, camera);
        }

        animate();
    }

    // Wait for Three.js to load
    if (typeof THREE !== 'undefined') {
        initHeroCanvas();
    } else {
        window.addEventListener('load', initHeroCanvas);
    }
})();
