import { setupScrollAnimations } from './artworks/tile'
console.log("Script loaded");

const start = document.querySelector(".start");
const story = document.querySelector(".story");

let hasShaken = false;  
const threshold = 15;

const handleMotionEvent = (event) => {
    if (hasShaken) return;  

    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    const totalAcceleration = Math.sqrt(x * x + y * y + z * z);

    if (totalAcceleration > threshold) {
        story.classList.remove("hidden");
        start.classList.add("hidden");
        hasShaken = true;   
        setupScrollAnimations();

    }
};

start.addEventListener("click", () => {
    story.classList.remove("hidden");
    start.classList.add("hidden");
    hasShaken = true;
    setupScrollAnimations();
});

window.addEventListener("devicemotion", handleMotionEvent);
