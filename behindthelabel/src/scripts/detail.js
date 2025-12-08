import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const pinAndAnimate = ({
    trigger,
    end = "+=200",
    animations,
    markers = true,
    pin,
}) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start: "top top",
            end,
            scrub: true,
            markers,
            pin
        },
    });

    animations.forEach(({ target, vars, position = 0 }) => {
        tl.to(target, vars, position);
    });

    return tl;
};

export const setupScrollAnimations = () => {
    pinAndAnimate({
        trigger: ".image-wrapper",
        end: "+=100",
        animations: [
            { target: ".top1", vars: { x: "0%", opacity: 1 } },
            { target: ".bottom1", vars: { x: "-0%", opacity: 1 } },
            { target: ".mouth", vars: { x: "0%", opacity: 1 } },
            { target: ".ear", vars: { x: "-0%", opacity: 1 } },
            { target: ".bla1", vars: { x: "15vw", opacity: 1 } },
            { target: ".bla2", vars: { x: "20vw", opacity: 1 } },
            { target: ".bla3", vars: { x: "25vw", opacity: 1 } },
            { target: ".aha1", vars: { x: "20vw", opacity: 1 } },
            { target: ".aha2", vars: { x: "55vw", opacity: 1 } },
            { target: ".aha3", vars: { x: "75vw", opacity: 1 } },
        ],
        pin: ".story",
    });

};


// const storyText = document.querySelector(".story__text");


// const storyTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".story",
//         start: "top top",
//         end: "+=800",
//         scrub: true,
//         pin: false, //moet af staan om shake event te doen werken!!
//     }
// });

// //top subtitle
// storyTimeline.fromTo(
//     ".story__subtitle.top",
//     { x: "-100%" },
//     { x: 0, ease: "none" }
// );

// //bottom subtitle
// storyTimeline.fromTo(
//     ".story__subtitle.bottom",
//     { x: "-100%" },
//     { x: 0, ease: "none" }
// );

// //scramble text
// gsap.set(storyText, { opacity: 0 });
// storyTimeline.to(storyText, {
//     opacity:1,
//     scrambleText: {
//         text: storyText.textContent,
//         chars: "",
//         speed: 0.3,
//         revealDelay: 0.05
//     },
//     ease: "none"
// });



