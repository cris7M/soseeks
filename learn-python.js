/* ==========================================================
   SOSEEKS PYTHON ACADEMY — App Engine
   ========================================================== */

const ACCESS_CODE = 'SOSEEKS2026';
const STORAGE_KEY = 'soseeks_pyacademy';

class PythonAcademy {
    constructor() {
        this.progress = {};
        this.currentModule = null;
        this.currentTopic = null;
        this.currentView = 'dashboard';
        this.quizState = null;
        this.sidebarOpen = window.innerWidth > 1024;
        this.init();
    }

    init() {
        this.loadProgress();
        const authTime = localStorage.getItem(STORAGE_KEY + '_auth_time');
        const isAuth = localStorage.getItem(STORAGE_KEY + '_auth') === 'true';

        if (isAuth && authTime) {
            const elapsed = Date.now() - parseInt(authTime, 10);
            const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
            if (elapsed < TWENTY_FOUR_HOURS) {
                this.unlock();
            } else {
                this.lock();
                this.showToast('Access expired. Please enter a new code.', 4000);
            }
        }
        this.bindEvents();
    }

    /* ========== AUTH ========== */
    bindEvents() {
        const gateBtn = document.getElementById('gate-btn');
        const gateInput = document.getElementById('gate-code');
        const gateError = document.getElementById('gate-error');

        gateBtn.addEventListener('click', () => this.tryUnlock());
        gateInput.addEventListener('keydown', e => { if (e.key === 'Enter') this.tryUnlock(); });

        document.getElementById('btn-home').addEventListener('click', () => this.showDashboard());
        document.getElementById('btn-lock').addEventListener('click', () => this.lock());
        document.getElementById('sidebar-toggle').addEventListener('click', () => this.toggleSidebar());
        document.getElementById('sidebar-overlay').addEventListener('click', () => this.closeSidebar());

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                document.getElementById('sidebar-overlay').classList.remove('active');
            }
        });
    }

    tryUnlock() {
        const input = document.getElementById('gate-code');
        const card = document.querySelector('.gate-card');
        const error = document.getElementById('gate-error');

        if (input.value.trim().toUpperCase() === ACCESS_CODE) {
            localStorage.setItem(STORAGE_KEY + '_auth', 'true');
            localStorage.setItem(STORAGE_KEY + '_auth_time', Date.now().toString());
            this.unlock();
        } else {
            error.textContent = 'Invalid access code. Please try again.';
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 500);
            input.value = '';
            input.focus();
        }
    }

    unlock() {
        document.getElementById('gate').classList.add('gate-unlocked');
        document.getElementById('app').classList.remove('app-hidden');
        this.renderSidebar();
        this.showDashboard();
        this.updateGlobalProgress();
        if (window.innerWidth > 1024) {
            document.getElementById('sidebar').classList.add('sidebar-open');
            document.getElementById('main').classList.remove('full-width');
        } else {
            document.getElementById('main').classList.add('full-width');
        }
    }

    lock() {
        localStorage.removeItem(STORAGE_KEY + '_auth');
        localStorage.removeItem(STORAGE_KEY + '_auth_time');
        location.reload();
    }

    /* ========== SIDEBAR ========== */
    toggleSidebar() {
        const sb = document.getElementById('sidebar');
        const main = document.getElementById('main');
        const toggle = document.getElementById('sidebar-toggle');
        const overlay = document.getElementById('sidebar-overlay');

        this.sidebarOpen = !this.sidebarOpen;
        sb.classList.toggle('sidebar-open', this.sidebarOpen);
        toggle.classList.toggle('active', this.sidebarOpen);

        if (window.innerWidth > 1024) {
            main.classList.toggle('full-width', !this.sidebarOpen);
        } else {
            overlay.classList.toggle('active', this.sidebarOpen);
        }
    }

    closeSidebar() {
        if (window.innerWidth <= 1024) {
            this.sidebarOpen = false;
            document.getElementById('sidebar').classList.remove('sidebar-open');
            document.getElementById('sidebar-toggle').classList.remove('active');
            document.getElementById('sidebar-overlay').classList.remove('active');
        }
    }

    renderSidebar() {
        const nav = document.getElementById('sidebar-nav');
        nav.innerHTML = MODULES.map(mod => {
            const topicsDone = mod.topics.filter(t => this.isTopicDone(mod.id, t.id)).length;
            const allDone = topicsDone === mod.topics.length;
            return `
            <div class="nav-module ${this.currentModule === mod.id ? 'open' : ''}" data-mod="${mod.id}">
                <button class="nav-module-btn" data-mod="${mod.id}">
                    <span class="mod-icon">${mod.icon}</span>
                    <span class="mod-title">${mod.title}</span>
                    ${allDone ? '<span class="mod-check">✓</span>' : ''}
                    <svg class="mod-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                <div class="nav-topics">
                    ${mod.topics.map(t => {
                        const done = this.isTopicDone(mod.id, t.id);
                        const active = this.currentTopic === t.id && this.currentModule === mod.id;
                        return `<button class="nav-topic-btn ${done ? 'completed' : ''} ${active ? 'active' : ''}" data-mod="${mod.id}" data-topic="${t.id}">
                            <span class="topic-dot"></span>
                            ${t.title}
                        </button>`;
                    }).join('')}
                </div>
            </div>`;
        }).join('');

        nav.querySelectorAll('.nav-module-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mod = btn.closest('.nav-module');
                mod.classList.toggle('open');
            });
        });

        nav.querySelectorAll('.nav-topic-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const modId = parseInt(btn.dataset.mod);
                const topicId = btn.dataset.topic;
                this.showTopic(modId, topicId);
                this.closeSidebar();
            });
        });
    }

    /* ========== PROGRESS ========== */
    loadProgress() {
        try {
            this.progress = JSON.parse(localStorage.getItem(STORAGE_KEY + '_progress')) || {};
        } catch { this.progress = {}; }
    }

    saveProgress() {
        localStorage.setItem(STORAGE_KEY + '_progress', JSON.stringify(this.progress));
    }

    markTopicDone(modId, topicId) {
        if (!this.progress[modId]) this.progress[modId] = {};
        if (!this.progress[modId][topicId]) this.progress[modId][topicId] = {};
        this.progress[modId][topicId].done = true;
        this.saveProgress();
        this.updateGlobalProgress();
        this.renderSidebar();
    }

    saveQuizScore(modId, topicId, score) {
        if (!this.progress[modId]) this.progress[modId] = {};
        if (!this.progress[modId][topicId]) this.progress[modId][topicId] = {};
        this.progress[modId][topicId].quiz = score;
        this.saveProgress();
        this.updateGlobalProgress();
    }

    isTopicDone(modId, topicId) {
        return this.progress[modId]?.[topicId]?.done === true;
    }

    getQuizScore(modId, topicId) {
        return this.progress[modId]?.[topicId]?.quiz ?? null;
    }

    getStats() {
        let totalTopics = 0, doneTopics = 0, quizCount = 0, quizTotal = 0;
        MODULES.forEach(mod => {
            mod.topics.forEach(t => {
                totalTopics++;
                if (this.isTopicDone(mod.id, t.id)) doneTopics++;
                const qs = this.getQuizScore(mod.id, t.id);
                if (qs !== null) { quizCount++; quizTotal += qs; }
            });
        });
        const pct = totalTopics ? Math.round((doneTopics / totalTopics) * 100) : 0;
        const avgScore = quizCount ? Math.round(quizTotal / quizCount) : 0;
        return { totalTopics, doneTopics, pct, quizCount, avgScore };
    }

    updateGlobalProgress() {
        const stats = this.getStats();
        const fill = document.getElementById('topbar-progress');
        const text = document.getElementById('topbar-progress-text');
        if (fill) fill.style.width = stats.pct + '%';
        if (text) text.textContent = stats.pct + '%';

        const ring = document.getElementById('ring-bar');
        if (ring) {
            const circumference = 2 * Math.PI * 52;
            ring.style.strokeDasharray = circumference;
            ring.style.strokeDashoffset = circumference - (circumference * stats.pct / 100);
            ring.style.stroke = stats.pct > 0 ? '' : 'transparent';
        }
        const ringPct = document.getElementById('ring-pct');
        if (ringPct) ringPct.textContent = stats.pct + '%';

        const sbDone = document.getElementById('sb-done');
        const sbQuiz = document.getElementById('sb-quiz');
        const sbAvg = document.getElementById('sb-avg');
        if (sbDone) sbDone.textContent = stats.doneTopics;
        if (sbQuiz) sbQuiz.textContent = stats.quizCount;
        if (sbAvg) sbAvg.textContent = stats.avgScore + '%';
    }

    /* ========== VIEWS ========== */
    switchView(view) {
        ['dashboard', 'topic', 'quiz'].forEach(v => {
            const el = document.getElementById('view-' + v);
            if (el) el.classList.toggle('view-hidden', v !== view);
        });
        this.currentView = view;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ========== DASHBOARD ========== */
    showDashboard() {
        this.currentModule = null;
        this.currentTopic = null;
        this.switchView('dashboard');
        const container = document.getElementById('view-dashboard');

        container.innerHTML = `
        <div class="dash-hero">
            <h1>Core <span class="glow">Python</span></h1>
            <p>Master Core Python from fundamentals to advanced concurrency — with real-world analogies, animated examples, and interview-ready quizzes.</p>
        </div>
        <div class="dash-grid">
            ${MODULES.map(mod => {
                const done = mod.topics.filter(t => this.isTopicDone(mod.id, t.id)).length;
                const pct = Math.round((done / mod.topics.length) * 100);
                return `
                <div class="dash-card" data-mod="${mod.id}" style="--card-accent:${mod.color}">
                    <div class="dash-card-head">
                        <div class="dash-card-icon">${mod.icon}</div>
                        <div class="dash-card-meta">
                            <h3>${mod.title}</h3>
                            <small>Module ${mod.id} · ${mod.topics.length} topics</small>
                        </div>
                    </div>
                    <p>${mod.description}</p>
                    <div class="dash-card-progress"><div class="dash-card-progress-fill" style="width:${pct}%;background:${mod.color}"></div></div>
                    <div class="dash-card-footer">
                        <span>${done}/${mod.topics.length} completed</span>
                        <span style="color:${mod.color}">${pct}%</span>
                    </div>
                </div>`;
            }).join('')}
        </div>`;

        container.querySelectorAll('.dash-card').forEach(card => {
            card.addEventListener('click', () => {
                const modId = parseInt(card.dataset.mod);
                const mod = MODULES.find(m => m.id === modId);
                if (mod && mod.topics.length) {
                    this.showTopic(modId, mod.topics[0].id);
                }
            });
        });
        this.renderSidebar();
    }

    /* ========== TOPIC VIEW ========== */
    showTopic(modId, topicId) {
        const mod = MODULES.find(m => m.id === modId);
        const topic = mod?.topics.find(t => t.id === topicId);
        if (!mod || !topic) return;

        this.currentModule = modId;
        this.currentTopic = topicId;
        this.switchView('topic');
        this.renderSidebar();

        const topicIdx = mod.topics.indexOf(topic);
        const prevTopic = topicIdx > 0 ? mod.topics[topicIdx - 1] : null;
        const nextTopic = topicIdx < mod.topics.length - 1 ? mod.topics[topicIdx + 1] : null;
        const prevMod = modId > 1 ? MODULES.find(m => m.id === modId - 1) : null;
        const nextMod = MODULES.find(m => m.id === modId + 1);
        const isDone = this.isTopicDone(modId, topicId);

        const container = document.getElementById('view-topic');
        container.innerHTML = `
        <div class="topic-header">
            <div class="topic-breadcrumb">
                <a href="#" class="bc-home">Home</a> <span>›</span>
                <a href="#" class="bc-mod">${mod.title}</a> <span>›</span>
                <span>${topic.title}</span>
            </div>
            <h1>${topic.emoji || ''} ${topic.title}</h1>
        </div>

        <!-- ANALOGY -->
        <div class="topic-section">
            <div class="section-label">Real-World Analogy</div>
            <div class="analogy-card">
                <div class="analogy-title"><span class="emoji">${topic.analogy.emoji || topic.emoji || '💡'}</span> ${topic.analogy.title}</div>
                <div class="analogy-desc">${topic.analogy.desc}</div>
                <div class="analogy-visual" id="analogy-anim">${this.renderAnalogy(topic.analogy)}</div>
            </div>
        </div>

        <!-- EXPLANATION -->
        <div class="topic-section">
            <div class="section-label">Concept Explanation</div>
            <div class="theory-content">${topic.theory}</div>
        </div>

        <!-- CODE EXAMPLES -->
        <div class="topic-section">
            <div class="section-label">Code Examples</div>
            ${topic.code.map((c, i) => `
            <div class="code-block">
                <div class="code-block-head">
                    <span class="code-block-title">${c.title || 'Example ' + (i + 1)}</span>
                    <div class="code-block-dots"><span></span><span></span><span></span></div>
                </div>
                <div class="code-body" id="code-body-${i}">${this.renderCode(c.code)}</div>
                ${c.output ? `<div class="code-output">${this.escHtml(c.output)}</div>` : ''}
            </div>`).join('')}
        </div>

        <!-- KEY TAKEAWAYS -->
        <div class="topic-section">
            <div class="section-label">Key Takeaways</div>
            <div class="takeaways-card">
                <h3>Remember These Points</h3>
                ${topic.takeaways.map(t => `
                <div class="takeaway-item">
                    <div class="takeaway-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <span>${t}</span>
                </div>`).join('')}
            </div>
        </div>

        <!-- FOOTER NAV -->
        <div class="topic-footer">
            <div>
                ${prevTopic ? `<button class="topic-footer-btn prev" data-mod="${modId}" data-topic="${prevTopic.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    ${prevTopic.title}
                </button>` : (prevMod ? `<button class="topic-footer-btn prev" data-mod="${prevMod.id}" data-topic="${prevMod.topics[prevMod.topics.length-1].id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Prev Module
                </button>` : '')}
            </div>
            <div style="display:flex;gap:10px">
                ${!isDone ? `<button class="topic-footer-btn done" id="btn-mark-done">✓ Mark Complete</button>` : ''}
                ${topic.quiz && topic.quiz.length ? `<button class="topic-footer-btn quiz-start" id="btn-start-quiz">Take Quiz →</button>` : ''}
                ${!topic.quiz?.length && nextTopic ? `<button class="topic-footer-btn next" data-mod="${modId}" data-topic="${nextTopic.id}">
                    ${nextTopic.title}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>` : ''}
                ${!topic.quiz?.length && !nextTopic && nextMod ? `<button class="topic-footer-btn next" data-mod="${nextMod.id}" data-topic="${nextMod.topics[0].id}">
                    Next Module →
                </button>` : ''}
            </div>
        </div>`;

        container.querySelector('.bc-home')?.addEventListener('click', e => { e.preventDefault(); this.showDashboard(); });
        container.querySelector('.bc-mod')?.addEventListener('click', e => { e.preventDefault(); this.showTopic(modId, mod.topics[0].id); });

        container.querySelectorAll('.topic-footer-btn[data-topic]').forEach(btn => {
            btn.addEventListener('click', () => this.showTopic(parseInt(btn.dataset.mod), btn.dataset.topic));
        });

        document.getElementById('btn-mark-done')?.addEventListener('click', () => {
            this.markTopicDone(modId, topicId);
            this.showTopic(modId, topicId);
            this.showToast('Topic marked as complete!', 'success');
        });

        document.getElementById('btn-start-quiz')?.addEventListener('click', () => {
            this.startQuiz(modId, topicId);
        });
    }

    /* ========== ANALOGY RENDERER ========== */
    renderAnalogy(analogy) {
        switch (analogy.type) {
            case 'jars':
                return (analogy.items || []).map((item, i) =>
                    `<div class="anim-jar" style="--d:${i * 0.3}s">
                        <div class="jar-label">${item.label}</div>
                        <div class="jar-body"><div class="jar-value">${item.value}</div></div>
                    </div>`
                ).join('');

            case 'traffic':
                return `<div class="anim-traffic">
                    <div class="traffic-light red ${analogy.active === 'red' ? 'active' : ''}"></div>
                    <div class="traffic-light yellow ${analogy.active === 'yellow' ? 'active' : ''}"></div>
                    <div class="traffic-light green ${analogy.active === 'green' ? 'active' : ''}"></div>
                    <div class="traffic-label">${analogy.label || 'if condition → decide'}</div>
                </div>`;

            case 'train':
                return `<div class="anim-train">
                    ${(analogy.items || []).map((item, i) =>
                        `<div class="train-car"><span class="train-idx">[${i}]</span>${item}</div>`
                    ).join('')}
                </div>`;

            case 'machine':
                return `<div class="anim-machine">
                    <div class="machine-input">${analogy.input || 'input'}</div>
                    <span class="machine-arrow">→</span>
                    <div class="machine-box">${analogy.name || 'f(x)'}</div>
                    <span class="machine-arrow">→</span>
                    <div class="machine-output">${analogy.output || 'output'}</div>
                </div>`;

            case 'wrap':
                return `<div class="anim-wrap">
                    <div style="text-align:center">
                        <div class="wrap-box">
                            <div class="wrap-inner">${analogy.inner || 'func'}</div>
                            <div class="wrap-outer"></div>
                        </div>
                        <div class="wrap-label" style="margin-top:12px;color:var(--text-dim)">
                            ${analogy.label || '@decorator wraps the function'}
                        </div>
                    </div>
                </div>`;

            case 'conveyor':
                return `<div class="anim-conveyor">
                    ${(analogy.items || []).map((item, i) =>
                        `<div class="conveyor-item ${i < (analogy.consumed || 0) ? 'consumed' : 'waiting'}" style="--d:${i * 0.2}s">${item}</div>`
                    ).join('')}
                </div>`;

            case 'chefs':
                return `<div class="anim-chefs">
                    ${(analogy.chefs || []).map((c, i) =>
                        `<div class="chef-lane">
                            <div class="chef-emoji">${c.emoji}</div>
                            <div class="chef-task" style="--d:${i * 0.3}s">${c.task}</div>
                        </div>`
                    ).join('')}
                </div>`;

            case 'contact':
                return `<div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:260px">
                    ${(analogy.items || []).map((item, i) =>
                        `<div class="anim-jar" style="--d:${i * 0.2}s;flex-direction:row;gap:12px">
                            <div class="jar-label" style="min-width:60px">${item.key}</div>
                            <span style="color:var(--text-dim)">→</span>
                            <div class="jar-value">${item.value}</div>
                        </div>`
                    ).join('')}
                </div>`;

            case 'envelope':
                return `<div style="text-align:center">
                    <div style="display:inline-block;padding:16px 28px;border:2px solid var(--warning);border-radius:4px;position:relative;background:rgba(245,158,11,0.06)">
                        <div style="font-family:var(--font-code);font-size:0.85rem;color:var(--warning)">${analogy.content || '(1, 2, 3)'}</div>
                        <div style="position:absolute;top:-10px;right:-10px;background:var(--error);color:white;font-size:0.6rem;padding:2px 6px;border-radius:4px">SEALED</div>
                    </div>
                    <div style="font-size:0.75rem;color:var(--text-dim);margin-top:10px">Cannot modify after creation</div>
                </div>`;

            case 'stamps':
                return `<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
                    ${(analogy.items || []).map((item, i) =>
                        `<div class="conveyor-item ${item.dup ? '' : 'consumed'}" style="--d:${i * 0.15}s;${item.dup ? 'opacity:0.3;text-decoration:line-through;border-color:var(--error)' : ''}">${item.val}</div>`
                    ).join('')}
                </div>`;

            case 'blueprint':
                return `<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;justify-content:center">
                    <div style="padding:16px 24px;border:2px dashed var(--primary);border-radius:12px;text-align:center">
                        <div style="font-size:0.7rem;color:var(--primary-light);margin-bottom:4px">BLUEPRINT</div>
                        <div style="font-family:var(--font-code);font-size:0.85rem">${analogy.className || 'Car'}</div>
                    </div>
                    <span class="machine-arrow">→</span>
                    ${(analogy.objects || ['obj1', 'obj2']).map(o =>
                        `<div style="padding:12px 18px;background:rgba(16,185,129,0.08);border:1px solid var(--success);border-radius:8px;font-family:var(--font-code);font-size:0.8rem;color:var(--success)">${o}</div>`
                    ).join('')}
                </div>`;

            case 'net':
                return `<div style="text-align:center">
                    <div style="font-size:2rem;margin-bottom:8px">🤸</div>
                    <div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-bottom:4px">
                        <span style="color:var(--text-dim)">───</span>
                        <span style="color:var(--error);font-family:var(--font-code);font-size:0.75rem">try</span>
                        <span style="color:var(--text-dim)">───</span>
                    </div>
                    <div style="padding:8px 24px;background:rgba(16,185,129,0.08);border:1px dashed var(--success);border-radius:8px;font-size:0.8rem;color:var(--success)">
                        🥅 except catches the fall
                    </div>
                </div>`;

            case 'diary':
                return `<div style="text-align:center">
                    <div style="display:inline-block;padding:20px 28px;background:rgba(99,102,241,0.04);border:1px solid var(--border);border-radius:4px 12px 12px 4px;border-left:4px solid var(--primary);min-width:200px;text-align:left">
                        <div style="font-size:0.7rem;color:var(--primary-light);margin-bottom:8px">📖 my_file.txt</div>
                        <div style="font-family:var(--font-code);font-size:0.8rem;color:var(--text-muted)">
                            ${analogy.lines || 'Hello World\\nLine 2'}
                        </div>
                    </div>
                </div>`;

            case 'waiter':
                return `<div class="anim-chefs">
                    <div class="chef-lane" style="border-color:var(--primary)">
                        <div class="chef-emoji">🧑‍🍳</div>
                        <div class="chef-task" style="--d:0s">cooking...</div>
                    </div>
                    <div class="chef-lane" style="border-color:var(--success)">
                        <div class="chef-emoji">🧑‍💼</div>
                        <div class="chef-task" style="--d:0.4s">taking orders</div>
                    </div>
                    <div class="chef-lane" style="border-color:var(--warning)">
                        <div class="chef-emoji">🧑‍💼</div>
                        <div class="chef-task" style="--d:0.8s">serving table 3</div>
                    </div>
                </div>`;

            default:
                return `<div style="color:var(--text-dim);font-size:0.9rem">${analogy.fallback || '💡 Visual coming soon'}</div>`;
        }
    }

    /* ========== CODE RENDERING ========== */
    renderCode(code) {
        const lines = code.split('\n');
        return lines.map((line, i) => {
            return `<div class="line"><span class="line-num">${i + 1}</span><span class="line-text">${this.highlightSyntax(this.escHtml(line))}</span></div>`;
        }).join('');
    }

    highlightSyntax(line) {
        const keywords = ['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'return', 'import', 'from', 'as', 'try', 'except', 'finally', 'raise', 'with', 'yield', 'lambda', 'pass', 'break', 'continue', 'and', 'or', 'not', 'in', 'is', 'del', 'global', 'nonlocal', 'assert', 'async', 'await'];
        const builtins = ['print', 'len', 'range', 'type', 'int', 'str', 'float', 'list', 'dict', 'set', 'tuple', 'bool', 'input', 'open', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'reversed', 'sum', 'min', 'max', 'abs', 'round', 'isinstance', 'super', 'property', 'staticmethod', 'classmethod', 'next', 'iter'];
        const bools = ['True', 'False', 'None'];

        const tokens = [];
        const hold = (html) => { const i = tokens.length; tokens.push(html); return `\u00ABT${i}T\u00BB`; };

        let r = line;

        r = r.replace(/(#.*)$/gm, m => hold(`<span class="syn-cm">${m}</span>`));
        r = r.replace(/(f)(&quot;|&#x27;)/g, (_, f, q) => hold(`<span class="syn-fn">${f}</span>`) + q);
        r = r.replace(/(&quot;.*?&quot;|&#x27;.*?&#x27;)/g, m => hold(`<span class="syn-str">${m}</span>`));
        r = r.replace(/@(\w+)/g, (_, n) => hold(`<span class="syn-dec">@${n}</span>`));
        r = r.replace(/\bself\b/g, () => hold('<span class="syn-self">self</span>'));
        bools.forEach(b => { r = r.replace(new RegExp(`\\b${b}\\b`, 'g'), () => hold(`<span class="syn-bool">${b}</span>`)); });
        builtins.forEach(bi => { r = r.replace(new RegExp(`\\b(${bi})\\b(?=\\s*\\()`, 'g'), m => hold(`<span class="syn-bi">${m}</span>`)); });
        keywords.forEach(kw => { r = r.replace(new RegExp(`\\b(${kw})\\b`, 'g'), m => hold(`<span class="syn-kw">${m}</span>`)); });
        r = r.replace(/\b(\d+\.?\d*)\b/g, m => hold(`<span class="syn-num">${m}</span>`));

        tokens.forEach((html, i) => { r = r.replace(`\u00ABT${i}T\u00BB`, html); });
        return r;
    }

    escHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
    }

    /* ========== QUIZ ENGINE ========== */
    startQuiz(modId, topicId) {
        const mod = MODULES.find(m => m.id === modId);
        const topic = mod?.topics.find(t => t.id === topicId);
        if (!topic?.quiz?.length) return;

        this.quizState = {
            modId, topicId, questions: topic.quiz,
            current: 0, answers: [], score: 0, topicTitle: topic.title
        };
        this.switchView('quiz');
        this.renderQuizQuestion();
    }

    renderQuizQuestion() {
        const qs = this.quizState;
        if (!qs) return;
        const container = document.getElementById('view-quiz');
        const q = qs.questions[qs.current];
        const total = qs.questions.length;

        container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>Quiz: ${qs.topicTitle}</h2>
                <p>Question ${qs.current + 1} of ${total}</p>
                <div class="quiz-progress">
                    ${qs.questions.map((_, i) => {
                        let cls = '';
                        if (i < qs.current) cls = qs.answers[i] ? 'correct' : 'wrong';
                        else if (i === qs.current) cls = 'active';
                        return `<div class="quiz-dot ${cls}"></div>`;
                    }).join('')}
                </div>
            </div>
            <div class="quiz-question-card">
                <div class="quiz-q-num">QUESTION ${qs.current + 1}</div>
                <div class="quiz-q-text">${q.q}</div>
                ${q.code ? `<div class="quiz-q-code">${this.highlightSyntax(this.escHtml(q.code))}</div>` : ''}
                <div class="quiz-options" id="quiz-options">
                    ${q.options.map((opt, i) => `
                    <button class="quiz-opt" data-idx="${i}">
                        <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </button>`).join('')}
                </div>
                <div id="quiz-feedback"></div>
            </div>
        </div>`;

        container.querySelectorAll('.quiz-opt').forEach(btn => {
            btn.addEventListener('click', () => this.answerQuiz(parseInt(btn.dataset.idx)));
        });
    }

    answerQuiz(idx) {
        const qs = this.quizState;
        const q = qs.questions[qs.current];
        const correct = idx === q.answer;
        qs.answers.push(correct);
        if (correct) qs.score++;

        const opts = document.querySelectorAll('.quiz-opt');
        opts.forEach((opt, i) => {
            opt.classList.add('disabled');
            if (i === q.answer) opt.classList.add('correct');
            if (i === idx && !correct) opt.classList.add('wrong');
        });

        const feedback = document.getElementById('quiz-feedback');
        feedback.innerHTML = `
        <div class="quiz-explain ${correct ? 'right' : 'wrong-exp'}">
            <strong>${correct ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
            ${q.explain}
        </div>
        <button class="quiz-next-btn" id="quiz-next">${qs.current < qs.questions.length - 1 ? 'Next Question →' : 'See Results'}</button>`;

        document.getElementById('quiz-next').addEventListener('click', () => {
            qs.current++;
            if (qs.current < qs.questions.length) {
                this.renderQuizQuestion();
            } else {
                this.showQuizResults();
            }
        });
    }

    showQuizResults() {
        const qs = this.quizState;
        const pct = Math.round((qs.score / qs.questions.length) * 100);
        const level = pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'poor';
        const labels = { great: '🏆 Interview Ready!', good: '👍 Good Progress', poor: '📚 Keep Practicing' };

        this.saveQuizScore(qs.modId, qs.topicId, pct);
        this.markTopicDone(qs.modId, qs.topicId);

        const circumference = 2 * Math.PI * 52;
        const container = document.getElementById('view-quiz');
        container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-results">
                <div class="quiz-results-circle">
                    <svg viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="52" class="results-track"/>
                        <circle cx="60" cy="60" r="52" class="results-bar ${level}" style="stroke-dasharray:${circumference};stroke-dashoffset:${circumference}" id="results-ring"/>
                    </svg>
                    <div class="quiz-results-pct" style="color:var(--${level === 'great' ? 'success' : level === 'good' ? 'warning' : 'error'})">${pct}%</div>
                </div>
                <h2>Quiz Complete!</h2>
                <p>You scored ${qs.score} out of ${qs.questions.length}</p>
                <div class="quiz-results-badge ${level}">${labels[level]}</div>
                <div class="quiz-results-actions">
                    <button class="topic-footer-btn prev" id="res-retry">↻ Retry Quiz</button>
                    <button class="topic-footer-btn next" id="res-continue">Continue →</button>
                </div>
            </div>
        </div>`;

        setTimeout(() => {
            const ring = document.getElementById('results-ring');
            if (ring) ring.style.strokeDashoffset = circumference - (circumference * pct / 100);
        }, 100);

        if (pct >= 80) this.launchConfetti();

        document.getElementById('res-retry')?.addEventListener('click', () => {
            this.startQuiz(qs.modId, qs.topicId);
        });

        document.getElementById('res-continue')?.addEventListener('click', () => {
            const mod = MODULES.find(m => m.id === qs.modId);
            const tIdx = mod.topics.findIndex(t => t.id === qs.topicId);
            if (tIdx < mod.topics.length - 1) {
                this.showTopic(qs.modId, mod.topics[tIdx + 1].id);
            } else {
                const nextMod = MODULES.find(m => m.id === qs.modId + 1);
                if (nextMod) this.showTopic(nextMod.id, nextMod.topics[0].id);
                else this.showDashboard();
            }
        });
    }

    /* ========== CONFETTI ========== */
    launchConfetti() {
        const canvas = document.getElementById('confetti');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * 100,
            w: 6 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            rot: Math.random() * 360,
            vr: (Math.random() - 0.5) * 10,
            color: ['#6366f1', '#c471ed', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'][Math.floor(Math.random() * 6)],
            life: 1
        }));

        let frame;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;
            pieces.forEach(p => {
                if (p.life <= 0) return;
                alive = true;
                p.x += p.vx; p.y += p.vy; p.vy += 0.1;
                p.rot += p.vr; p.life -= 0.005;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot * Math.PI / 180);
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });
            if (alive) frame = requestAnimationFrame(animate);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
        animate();
        setTimeout(() => { cancelAnimationFrame(frame); ctx.clearRect(0, 0, canvas.width, canvas.height); }, 4000);
    }

    /* ========== TOAST ========== */
    showToast(msg, type = '') {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.className = 'toast show ' + type;
        setTimeout(() => toast.className = 'toast', 2500);
    }
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PythonAcademy();
});
