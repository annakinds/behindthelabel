console.log("scroll");
let inactivityTimer;
const delay = 3000; // 3 seconden
const hint = document.getElementById('scrollHint');

function resetTimer() {
    clearTimeout(inactivityTimer);
    hint.classList.remove('visible');

    inactivityTimer = setTimeout(() => {
        if (window.scrollY === 0) {
            hint.classList.add('visible');
        }
    }, delay);
}

// Interacties detecteren
['scroll', 'touchstart', 'touchmove', 'click'].forEach(event => {
    window.addEventListener(event, resetTimer, { passive: true });
});

// Start meteen
resetTimer();
