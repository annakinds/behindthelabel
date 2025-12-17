const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelectorAll(".nav-item");

const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });
});