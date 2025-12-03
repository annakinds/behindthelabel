// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const subtitles = document.querySelectorAll(".subtitle");
// subtitles.forEach((subtitle) => {
//     gsap.fromTo(
//         subtitle,
//         { autoAlpha: 0, x: -100 },
//         {
//             autoAlpha: 1,
//             x: 0,
//             duration: 0.6, 
//             scrollTrigger: {
//                 trigger: subtitle,
//                 start: "top 80%",
//                 end: "bottom 10%",
//                 toggleActions: "play reverse play reverse",
//                 markers: false, 
//             },
//         }
//     );
// });


// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//     const peel = document.querySelector(".peel-fold");

//     // Trigger de open animatie
//     requestAnimationFrame(() => {
//         peel.classList.add("peel-fold--open");
//     });

//     // Wanneer overgang klaar is → verwijder overlay volledig
//     peel.addEventListener("transitionend", () => {
//         peel.classList.add("peel-fold--hidden");
//     });
// });

// const chapters = document.querySelectorAll(".chapter");

// chapters.forEach((chapter) => {
//     const subtitle = chapter.querySelector(".subtitle");
//     const bubble = chapter.querySelector(".bubble");

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: chapter,
//             start: "top 50%",
//             end: "bottom 10%",
//             scrub: true,
//             markers: true,
//         },
//     });

//     tl.fromTo(
//         subtitle,
//         { x: 150, autoAlpha: 0 },
//         { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }
//     ).fromTo(
//         bubble,
//         { x: 150, autoAlpha: 0 },
//         { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
//         "-=0.6"
//     );
// });


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin)

const storyTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".story",
        start: "top top",     
        end: "+=500",      
        scrub: true,        
        pin: true,           
    }
});

storyTimeline.fromTo(
    ".story__subtitle.top",
    { x: "-100%"},  
    { x: 0 }
);

storyTimeline.fromTo(
    ".story__subtitle.bottom",
    { x: "-100%" },
    { x: 0 },
    0 
);

const storyText = document.querySelector(".story__text");

gsap.set(storyText, { opacity: 0 });

gsap.to(storyText, {
    opacity: 1,
    scrambleText: {
        text: storyText.textContent,
        chars: "",         
        speed: 0.3,
        revealDelay: 0.05
    },
    scrollTrigger: {
        trigger: ".story",
        start: "top top",           
        end: "bottom top",
        scrub: true
    }
});

