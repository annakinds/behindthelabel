import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const peelTL = gsap.timeline({ paused: true, reversed: true, defaults: { duration: 0.75, ease: "power1.inOut" } })

// peelTL
//     .to('#Awesome .sticky', { rotation: 10 }, 0)
//     .to('#Awesome .back', { height: 90, top: 110 }, 0)
//     .to('#Awesome .back .circle', { marginTop: -50 }, 0)
//     .to('#Awesome .front', { height: 70, boxShadow: "0px -60px 10px -60px rgba(0,0,0,0.1)" }, 0)
//     .to('#Awesome .front .circle', { marginTop: -90, backgroundColor: "#e2d439", backgroundPosition: "0 100px" }, 0)
//     .to('#Awesome h2', { duration: 0.05, opacity: 0 }, 0.3);

// const sticker = document.querySelector('#Awesome')

// sticker.addEventListener("mouseenter", peelDown);
// sticker.addEventListener("mouseleave", peelDown);

// function peelDown() {
//     peelTL.reversed() ? peelTL.play() : peelTL.reverse();
// }

// const peelTL = gsap.timeline({ paused: true, reversed: true, defaults: { duration: 0.75, ease: "power1.inOut" } })

// peelTL
//     .to('#detail .sticky', { rotation: 10 }, 0)
//     .to('#detail .back', { height: 90, top: 110 }, 0)
//     .to('#detail .back .section', { marginTop: -50 }, 0)
//     .to('#detail .front', { height: 70, boxShadow: "0px -60px 10px -60px rgba(0,0,0,0.1)" }, 0)
//     .to('#detail .front .section', { marginTop: -90, backgroundColor: "#FF6249", backgroundPosition: "0 100px" }, 0)
//     .to('#detail h2', { duration: 0.05, opacity: 0 }, 0.3);

// const sticker = document.querySelector('#detail')

// sticker.addEventListener("mouseenter", peelDown);
// sticker.addEventListener("mouseleave", peelDown);

// function peelDown() {
//     peelTL.reversed() ? peelTL.play() : peelTL.reverse();
// }



const fold = document.querySelector(".peel-fold");
const rect = document.querySelector(".peel-rect");

rect.addEventListener("mouseenter", () => {
  gsap.to(fold, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.7,
    ease: "power3.out"
  });
});

rect.addEventListener("mouseleave", () => {
  gsap.to(fold, {
    rotateX: 90,
    rotateY: 90,
    duration: 0.7,
    ease: "power3.in"
  });
});