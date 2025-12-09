import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const pinAndAnimate = ({ trigger, end, animations, markers = true, pin }) => {
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

    animations.forEach(({ target, vars, position = 0, scramble }) => {
        if (scramble) {
            tl.to(target, {
                scrambleText: scramble,
                ...vars
            }, position);
        } else {
            tl.to(target, vars, position);
        }
    });

    return tl;
};

export const setupScrollAnimations = () => {
    const text1 = document.querySelector(".story__text1")?.textContent || "";

    pinAndAnimate({
        trigger: ".story",
        animations: [
            { target: ".top1", vars: { x: "0%", opacity: 1 }, position: 0 },
            { target: ".bottom1", vars: { x: "-0%", opacity: 1 }, position: 0.1 },
            { target: ".bla1", vars: { x: "15vw", opacity: 1 }, position: 0.4 },
            { target: ".bla2", vars: { x: "20vw", opacity: 1 }, position: 0.5 },
            { target: ".bla3", vars: { x: "25vw", opacity: 1 }, position: 0.6 },
            { target: ".aha1", vars: { x: "20vw", opacity: 1 }, position: 0.7 },
            { target: ".aha2", vars: { x: "55vw", opacity: 1 }, position: 0.8 },
            { target: ".aha3", vars: { x: "75vw", opacity: 1 }, position: 0.9 },
            {
                target: ".story__text1",
                vars: { opacity: 1 },
                position: 1.2,
                scramble: {
                    text: text1,
                    chars: "",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".bla1", vars: { x: "-25vw", opacity: 1 }, position: 2.1 },
            { target: ".bla2", vars: { x: "-30vw", opacity: 1 }, position: 2.2 },
            { target: ".bla3", vars: { x: "-45vw", opacity: 1 }, position: 2.3 },
            { target: ".aha1", vars: { x: "100vw", opacity: 1 }, position: 2.4 },
            { target: ".aha2", vars: { x: "100vw", opacity: 1 }, position: 2.5 },
            { target: ".aha3", vars: { x: "100vw", opacity: 1 }, position: 2.6 },
            { target: ".mouth", vars: { opacity: 0 }, position: 2.7 },
            { target: ".ear", vars: { opacity: 0 }, position: 2.7 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 2.7 },
            { target: ".story__bg", vars: { opacity: 0 }, position: 2.7 },

            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 3 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 3.1 },
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 3.2 },
            { target: ".bottom2", vars: { x: "-0%", opacity: 1 }, position: 3.3 },
        ],
        pin: ".story",
    });
};


