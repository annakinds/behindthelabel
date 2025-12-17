document.addEventListener('DOMContentLoaded', () => {
    const hint = document.getElementById('scrollHint');
    if (!hint) return;

    const INACTIVITY_DELAY = 3000;
    let inactivityTimer = null;

    const showHint = () => {
        if (window.scrollY < 10) {
            hint.classList.add('visible');
        }
    }

    const hideHint = () => {
        hint.classList.remove('visible');
    }

    const resetTimer = () => {
        hideHint();
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showHint, INACTIVITY_DELAY);
    }

    window.addEventListener('scroll', resetTimer, { passive: true });
    window.addEventListener('touchstart', resetTimer, { passive: true });
    window.addEventListener('touchmove', resetTimer, { passive: true });
    window.addEventListener('wheel', resetTimer, { passive: true });
    window.addEventListener('click', resetTimer);

    resetTimer();
});
