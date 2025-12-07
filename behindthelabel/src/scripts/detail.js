import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const pinAndAnimate = ({
    trigger,
    end = "+=200",
    animations,
    markers = true,
}) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start: "top top",
            end,
            scrub: true,
            markers,
        },
    });

    animations.forEach(({ target, vars, position = 0 }) => {
        tl.to(target, vars, position);
    });

    return tl;
};

const setupScrollAnimations = () => {
    pinAndAnimate({
        trigger: ".image-wrapper",
        end: "+=50",
        animations: [
            { target: ".top1", vars: { x: "0%", opacity: 1 } },
            { target: ".bottom1", vars: { x: "-0%", opacity: 1 } },
        ]
    });
};

setupScrollAnimations();


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



