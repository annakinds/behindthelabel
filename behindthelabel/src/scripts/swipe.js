const artworkArray = Array.from(document.querySelectorAll(".swipe__artwork"));
const smashBtn = document.querySelector(".smash__button");
const passBtn = document.querySelector(".pass__button");
const container = document.querySelector(".swipe__artworks");

const urls = [
    "/behindthelabel/artworks/tiletableaus",
    "/behindthelabel/artworks/ballerinaman",
    "/behindthelabel/artworks/squarecircle",
    "/behindthelabel/artworks/happilyeverafter",
    "/behindthelabel/artworks/ileadtheway",
    "/behindthelabel/artworks/mentie",
    "/behindthelabel/artworks/skribbel",
    "/behindthelabel/artworks/plinth",
];


artworkArray.forEach((el, i) => {
    el.style.opacity = 0;
    el.dataset.url = urls[i];
});

let current = Math.floor(Math.random() * artworkArray.length);

const showArtwork = () => {
    artworkArray.forEach(a => {
        a.style.opacity = 0;
        a.style.transform = "";
    });

    artworkArray[current].style.opacity = 1;
    console.log(artworkArray[current]);

};

const nextArtwork = () => {
    current = (current + 1) % artworkArray.length;
    showArtwork();
};

showArtwork();


smashBtn.addEventListener("click", () => {
    window.location.href = artworkArray[current].dataset.url;
    
});


passBtn.addEventListener("click", nextArtwork);


let isDragging = false;
let startX = 0;
let cardEl = null;

const getPos = (e) => {
    const p = e.touches?.[0] || e.changedTouches?.[0] || e;
    const r = container.getBoundingClientRect();
    return p.clientX - r.left;
};

const startDrag = (e) => {
    cardEl = artworkArray[current];
    isDragging = true;
    startX = getPos(e);
    cardEl.style.transition = "none";
};

const moveDrag = (e) => {
    if (!isDragging) return;
    const x = getPos(e);
    const dx = x - startX;
    cardEl.style.transform = `translateX(${dx}px) rotate(${dx / 15}deg)`;
};

const endDrag = (e) => {
    if (!isDragging) return;

    const x = getPos(e);
    const dx = x - startX;

    isDragging = false;
    cardEl.style.transition = "0.4s";

    if (Math.abs(dx) > 80) {
        const direction = dx > 0 ? 1 : -1;

        cardEl.style.transform = `translateX(${direction * 1000}px) rotate(${45 * direction}deg)`;
        cardEl.style.opacity = 0;

        setTimeout(() => {
            if (direction > 0) {
                // swipe right = smash
                window.location.href = cardEl.dataset.url;
            } else {
                // swipe left = pass
                showArtwork();
            }
        }, 300);
    } else {
        cardEl.style.transform = "";
    }
};

container.addEventListener("mousedown", startDrag);
container.addEventListener("mousemove", moveDrag);
container.addEventListener("mouseup", endDrag);

container.addEventListener("touchstart", startDrag);
container.addEventListener("touchmove", moveDrag);
container.addEventListener("touchend", endDrag);

container.addEventListener("mouseleave", () => (isDragging = false));
