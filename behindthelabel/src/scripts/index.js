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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chapters = document.querySelectorAll(".chapter");

chapters.forEach((chapter) => {
    const subtitle = chapter.querySelector(".subtitle");
    const bubble = chapter.querySelector(".bubble");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: chapter,
            start: "top 60%",
            end: "top 10%",
            scrub: true,
            markers: false,
        },
    });

    tl.fromTo(
        subtitle,
        { x: 150, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
        bubble,
        { x: 150, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
    );
});
