import { gsap } from "gsap";

export const startPeel = (onComplete) => {
    const peelContainer = document.querySelector(".peel-container");
    const peelEffect = peelContainer.querySelector(".triangle-mask");
    const triangleFill = peelContainer.querySelector(".triangle-fill");
    const cornerPeel = peelContainer.querySelector(".corner-peel");

    gsap.set(peelEffect, {
        clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)"
    });

    const tl = gsap.timeline({
        onComplete: () => onComplete && onComplete()
    });

    tl.to(peelEffect, {
        clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
        duration: 1,
        ease: "power2.out"
    }, 0);

    // Collapse mask to top left
    tl.to(peelEffect, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        duration: 1,
        ease: "power2.inOut"
    }, 1);


    tl.to(cornerPeel, {
        width: "105%",
        height: "105%",
        duration: 1,
        ease: "power2.out"
    }, 0);

   tl.to(triangleFill, {
        x: "-120%",
        y: "-260%",
        scale: 1.2,
         duration: 1,
        ease: "power2.in"
     }, 0.6);
};
