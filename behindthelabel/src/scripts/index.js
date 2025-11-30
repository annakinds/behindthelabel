import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const subtitles = document.querySelectorAll(".subtitle");
subtitles.forEach((subtitle) => {
    gsap.fromTo(
        subtitle,
        { autoAlpha: 0, x: -100 },
        {
            autoAlpha: 1,
            x: 0,
            duration: 0.6, 
            scrollTrigger: {
                trigger: subtitle,
                start: "top 80%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
                markers: false, 
            },
        }
    );
});