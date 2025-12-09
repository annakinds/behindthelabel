const artworkElements = document.querySelectorAll('.artwork');
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
