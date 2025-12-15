import { pinAndAnimate } from '../../components/Animate.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export const setupScrollAnimations = () => {
    const text1 = document.querySelector(".story__text1")?.textContent || "";
    const text2 = document.querySelector(".story__text2")?.textContent || "";
    const text3 = document.querySelector(".story__text3")?.textContent || "";
    pinAndAnimate({
        trigger: ".story",
        end: "+=20000",
        animations: [
            //chapter 1
            { target: ".top1", vars: { x: "0%", opacity: 1 }, position: 0 },
            { target: ".bottom1", vars: { x: "-0%", opacity: 1 }, position: 0.1 },
            { target: ".bla1", vars: { x: "70vw", opacity: 1 }, position: 0.4 },
            { target: ".bla2", vars: { x: "75vw", opacity: 1 }, position: 0.5 },
            { target: ".bla3", vars: { x: "80vw", opacity: 1 }, position: 0.6 },
            { target: ".aha1", vars: { x: "25vw", opacity: 1 }, position: 0.7 },
            { target: ".aha2", vars: { x: "55vw", opacity: 1 }, position: 0.8 },
            { target: ".aha3", vars: { x: "75vw", opacity: 1 }, position: 0.9 },
            {
                target: ".story__text1",
                vars: { opacity: 1 },
                position: 1.2,
                scramble: {
                    text: text1,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".bla1", vars: { x: "-50%", opacity: 1 }, position: 1.5 },
            { target: ".bla2", vars: { x: "-50%", opacity: 1 }, position: 1.5 },
            { target: ".bla3", vars: { x: "-50%", opacity: 1 }, position: 1.5 },
            { target: ".aha1", vars: { x: "110vw", opacity: 1 }, position: 1.5 },
            { target: ".aha2", vars: { x: "110vw", opacity: 1 }, position: 1.5 },
            { target: ".aha3", vars: { x: "110vw", opacity: 1 }, position: 1.5 },
            { target: ".mouth", vars: { opacity: 0 }, position: 1.5 },
            { target: ".ear", vars: { opacity: 0 }, position: 1.5 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 1.6 },
            { target: ".story__bg", vars: { opacity: 0 }, position: 1.6 },
            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 1.7 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 1.7 },

            //chapter 2
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 1.8 },
            { target: ".bottom2", vars: { x: "-0%", opacity: 1 }, position: 1.8 },
            { target: ".stomp1", vars: { scale: .6, opacity: 1, duration: 0 }, position: 1.9 },
            { target: ".foot1", vars: { opacity: 1, duration:0 }, position: 1.9 },
            { target: ".stomp1", vars: { opacity: 0, duration: 0 }, position: 2.2 },
            { target: ".stomp2", vars: { scale: .6, opacity: 1, duration: 0 }, position: 2.2 },
            { target: ".foot2", vars: { opacity: 1, duration: 0 }, position: 2.2 },
            { target: ".stomp2", vars: { opacity: 0, duration: 0 }, position: 2.5 },
            { target: ".stomp3", vars: { scale: .6, opacity: 1, duration: 0 }, position: 2.5 },
            { target: ".foot3", vars: { opacity: 1, duration: 0 }, position: 2.5 },
            { target: ".stomp3", vars: { opacity: 0, duration: 0 }, position: 2.8 },
            { target: ".stomp4", vars: { scale: .6, opacity: 1, duration: 0 }, position: 2.8 },
            { target: ".foot4", vars: { opacity: 1, duration: 0 }, position: 2.8 },
            { target: ".stomp4", vars: { opacity: 0, duration: 0 }, position: 3.1 },
            { target: ".stomp5", vars: { scale: .6, opacity: 1, duration: 0 }, position: 3.1 },
            { target: ".foot5", vars: { opacity: 1, duration: 0 }, position: 3.1 },
            { target: ".stomp5", vars: { opacity: 0, duration: 0 }, position: 3.2 },

            {
                target: ".story__text2",
                vars: { opacity: 1 },
                position: 3.2,
                scramble: {
                    text: text2,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".stomp1", vars: { scale: .1, opacity: 0 }, position: 3.7 },
            { target: ".stomp2", vars: { scale: .1, opacity: 0 }, position: 3.7 },
            { target: ".stomp3", vars: { scale: .1, opacity: 0 }, position: 3.7 },
            { target: ".stomp4", vars: { scale: .1, opacity: 0 }, position: 3.7 },
            { target: ".stomp5", vars: { scale: .1, opacity: 0 }, position: 3.7 },
            { target: ".foot1", vars: { opacity: 0 }, position: 3.8 },
            { target: ".foot2", vars: { opacity: 0 }, position: 3.8 },
            { target: ".foot3", vars: { opacity: 0 }, position: 3.8 },
            { target: ".foot4", vars: { opacity: 0 }, position: 3.8 },
            { target: ".foot5", vars: { opacity: 0 }, position: 3.8 },
            { target: ".story__text2", vars: { opacity: 0 }, position: 3.9 },
            { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 4 },
            { target: ".bottom2", vars: { x: "100%", opacity: 1 }, position: 4 },

            //chapter3
            { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 4.1 },
            { target: ".bottom3", vars: { x: "-0%", opacity: 1 }, position: 4.1 },
            { target: ".HC", vars: { opacity: 1 }, position: 4.2 },
            { target: ".writing", vars: { opacity: 1 }, position: 4.2 },
            { target: ".titleHC4", vars: { opacity: 1 }, position: 4.2 },
            { target: ".titleHC3", vars: { opacity: 1 }, position: 4.5 },
            { target: ".titleHC2", vars: { opacity: 1 }, position: 4.8 },
            { target: ".titleHC1", vars: { opacity: 1 }, position: 5.1 },
            {
                target: ".story__text3",
                vars: { opacity: 1 },
                position: 5.2,
                scramble: {
                    text: text3,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".HC", vars: { opacity: 0 }, position: 5.7 },
            { target: ".writing", vars: { opacity: 0 }, position: 5.7 },
            { target: ".titleHC4", vars: { opacity: 0 }, position: 5.7 },
            { target: ".titleHC3", vars: { opacity: 0 }, position: 5.7 },
            { target: ".titleHC2", vars: { opacity: 0 }, position: 5.7 },
            { target: ".titleHC1", vars: { opacity: 0 }, position: 5.7 },
            { target: ".story__text3", vars: { opacity: 0 }, position: 5.8 },
            { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 5.9 },
            { target: ".bottom3", vars: { x: "100%", opacity: 1 }, position: 5.9 },

            //map
            { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 6 },
            // { target: ".map", vars: { x: "0%", opacity: 1 }, position: 10.3 },
        ],
        pin: ".story",
    });
};
