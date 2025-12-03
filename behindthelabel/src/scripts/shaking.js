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
        start.classList.add("hidden");
        hasShaken = true;   
        story.classList.remove("hidden");
    }
};

window.addEventListener("devicemotion", handleMotionEvent);
