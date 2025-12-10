const artworkElements = document.querySelectorAll('.swipe__artwork');
const artworkArray = Array.from(artworkElements);
const smash = document.querySelector(".smash__button");
const pass = document.querySelector(".pass__button");


artworkArray[0].dataset.url = "/behindthelabel/artworks/tiletableaus";
artworkArray[1].dataset.url = "/behindthelabel/artworks/ballerinaman";
artworkArray[2].dataset.url = "/behindthelabel/artworks/squearecircle";
artworkArray[3].dataset.url = "/behindthelabel/artworks/happilyeverafter";
artworkArray[4].dataset.url = "/behindthelabel/artworks/ileadtheway";
artworkArray[5].dataset.url = "/behindthelabel/artworks/mentie";
artworkArray[6].dataset.url = "/behindthelabel/artworks/skribbel";
artworkArray[7].dataset.url = "/behindthelabel/artworks/plinth";

let currentArtwork;
const showArtwork = () => {
    artworkArray.forEach(art => art.style.opacity = 0);
    currentArtwork = Math.floor(Math.random() * 8);
    artworkArray[currentArtwork].style.opacity = 1;
    console.log(currentArtwork);
}
showArtwork();


//buttons
smash.addEventListener("click", () => {
    if (currentArtwork !== undefined) {
        const url = artworkArray[currentArtwork].dataset.url;
        if (url) {
            window.location.href = url; 
        }
    }
});

pass.addEventListener("click", () => {
    showArtwork();
});

//swipe interaction
const container = document.getElementById(".swipe__artworks");
let startX = 0, isDragging = false, currentCard = null;
let startPos = { x: 0, y: 0 }, swiping = false;

const isTouch = "ontouchstart" in window;
const ev = {
    down: isTouch ? "touchstart" : "mousedown",
    move: isTouch ? "touchmove" : "mousemove",
    up: isTouch ? "touchend" : "mouseup"
};

const pos = (e) => {
    const p = isTouch ? e.touches[0] : e;
    const r = container.getBoundingClientRect();
    return { x: p.clientX - r.left, y: p.clientY - r.top };
};

//SWIPING
const topCard = () => artworkArray[currentArtwork];

const startDrag = (x) => {
    currentCard = topCard();
    if (!currentCard) return;
    startX = x;
    isDragging = true;
    swiping = true;
    currentCard.style.transition = "none";
};

const moveDrag = (x) => {
    if (!isDragging || !currentCard) return;
    const dx = x - startX;
    currentCard.style.transform = `translateX(${dx}px) rotate(${dx / 10}deg)`;
};

const endDrag = (x) => {
    if (!isDragging || !currentCard) return;
    const dx = x - startX;
    const swipe = Math.abs(dx) > 10;
    currentCard.style.transition = "transform .4s, opacity .4s";

    if (swipe) {
        const dir = dx > 0 ? 1 : -1;
        currentCard.style.transform = `translateX(${dir * 1000}px) rotate(${45 * dir}deg)`;
        currentCard.style.opacity = 0;
        setTimeout(() => currentCard.remove(), 400);
    } else {
        currentCard.style.transform = "";
    }

    isDragging = false;
    swiping = false;
};

