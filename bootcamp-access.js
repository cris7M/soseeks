/**
 * Gen AI Bootcamp — access gate (no backend).
 * Include after the access form markup; expects #codeInput and optional #codeError.
 */
const validCodes = ['SOSEEK101', 'SOSEEK102', 'GENAI299'];

function unlockBootcamp() {
    const raw = document.getElementById('codeInput').value;
    const code = raw.trim().toUpperCase();

    if (validCodes.includes(code)) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'bootcamp.html';
        return;
    }

    const err = document.getElementById('codeError');
    const card = document.querySelector('.gate-card');
    if (err) {
        err.textContent = 'Invalid access code. Check with your mentor or pay at college.';
    } else {
        alert('Invalid Access Code');
    }
    if (card) {
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('codeInput');
    const btn = document.getElementById('unlockBtn');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') unlockBootcamp();
        });
        input.addEventListener('input', () => {
            const err = document.getElementById('codeError');
            if (err) err.textContent = '';
        });
    }
    if (btn) btn.addEventListener('click', unlockBootcamp);
});
