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
        end: "+=1000",
        animations: [
            //chapter 1
            { target: ".top1", vars: { x: "0%", opacity: 1 }, position: 0 },
            { target: ".bottom1", vars: { x: "-0%", opacity: 1 }, position: 0.1 },
            { target: ".trophy", vars: { opacity: 1 }, position: 0.2 },
            { target: ".winner", vars: { opacity: 1 }, position: 0.2 },
            { target: ".milan", vars: { opacity: 1, duration: 0 }, position: 0.2 },
            { target: ".milan__text", vars: { opacity: 1, duration: 0 }, position: 0.2 },
            { target: ".trophy", vars: { rotate:"-20deg" }, position: 0.5 },
            { target: ".winner", vars: { rotate: "-20deg" }, position: 0.5 },
            { target: ".liège", vars: { opacity: 1, duration: 0 }, position: 0.5 },
            { target: ".liège__text", vars: { opacity: 1, duration: 0 }, position: 0.5 },
            { target: ".trophy", vars: { rotate: "0deg" }, position: 0.8 },
            { target: ".winner", vars: { rotate: "0deg" }, position: 0.8 },
            { target: ".paris", vars: { opacity: 1, duration: 0 }, position: 0.8 },
            { target: ".paris__text", vars: { opacity: 1, duration: 0 }, position: 0.8 },
            {
                target: ".story__text1",
                vars: { opacity: 1 },
                position: 1,
                scramble: {
                    text: text1,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".trophy", vars: { opacity: 0 }, position: 1.5 },
            { target: ".winner", vars: { opacity: 0 }, position: 1.5 },
            { target: ".milan", vars: { opacity: 0 }, position: 1.5 },
            { target: ".milan__text", vars: { opacity: 0 }, position: 1.5 },
            { target: ".liège", vars: { opacity: 0 }, position: 1.5 },
            { target: ".liège__text", vars: { opacity: 0 }, position: 1.5 },
            { target: ".paris", vars: { opacity: 0 }, position: 1.5 },
            { target: ".paris__text", vars: { opacity: 0 }, position: 1.5 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 1.6 },
            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 1.7 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 1.7 },

            // //chapter 2
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 1.8 },
            { target: ".bottom2", vars: { x: "-0%", opacity: 1 }, position: 1.8 },
            { target: ".disco", vars: { opacity: 1 }, position: 2 },
            { target: ".party1", vars: { opacity: 1, duration: 0 }, position: 2 },
            { target: ".glass1", vars: { opacity: 1 }, position: 2 },
            { target: ".glass2", vars: { opacity: 1 }, position: 2 },
            { target: ".party2", vars: { opacity: 1, duration: 0 }, position: 2.3 },
            { target: ".cheers", vars: { opacity: 1, duration: 0 }, position: 2.3 },
            { target: ".yellowstar", vars: { opacity: 1, duration: 0 }, position: 2.3 },
            { target: ".glass1", vars: { rotate: "30deg" }, position: 2.3 },
            { target: ".glass2", vars: { rotate: "150deg" }, position: 2.3 },
            { target: ".star", vars: { opacity: 1, duration: 0 }, position: 2.6 },
            { target: ".party3", vars: { opacity: 1, duration: 0 }, position: 2.6 },
            {
                target: ".story__text2",
                vars: { opacity: 1 },
                position: 2.9,
                scramble: {
                    text: text2,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".disco", vars: { opacity: 0 }, position: 3.5 },
            { target: ".party1", vars: { opacity: 0 }, position: 3.5 },
            { target: ".party2", vars: { opacity: 0 }, position: 3.5 },
            { target: ".party3", vars: { opacity: 0 }, position: 3.5 },
            { target: ".glass1", vars: { opacity: 0 }, position: 3.5 },
            { target: ".glass2", vars: { opacity: 0 }, position: 3.5 },
            { target: ".star", vars: { opacity: 0 }, position: 3.5 },
            { target: ".cheers", vars: { opacity: 0 }, position: 3.5 },
            { target: ".yellowstar", vars: { opacity: 0 }, position: 3.5 },
            { target: ".story__text2", vars: { opacity: 0 }, position: 3.6 },
            { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 3.7 },
            { target: ".bottom2", vars: { x: "100%", opacity: 1 }, position: 3.7 },


            // //chapter 3
            { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 3.8 },
            { target: ".bottom3", vars: { x: "-0%", opacity: 1 }, position: 3.8 },
            { target: ".cyclist", vars: { opacity: 1 }, position: 3.9 },
            { target: ".vroom1", vars: { opacity: 1, duration: 0 }, position: 3.9 },
            { target: ".cyclist", vars: { top:"0vh", left:"0vw" }, position: 4.2 },
            { target: ".vroom2", vars: { opacity: 1, duration: 0 }, position: 4.2 },
            { target: ".cyclist", vars: { top: "-10vh", left: "-10vw" }, position: 4.5 },
            { target: ".vroom3", vars: { opacity: 1, duration: 0 }, position: 4.5 },
            {
                target: ".story__text3",
                vars: { opacity: 1 },
                position: 4.6,
                scramble: {
                    text: text3,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".vroom1", vars: { opacity: 0 }, position: 5 },
            { target: ".vroom2", vars: { opacity: 0 }, position: 5 },
            { target: ".vroom3", vars: { opacity: 0 }, position: 5 },
            { target: ".cyclist", vars: { opacity: 0 }, position: 5 },           
            { target: ".story__text3", vars: { opacity: 0 }, position: 5.1 },
            { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 5.2 },
            { target: ".bottom3", vars: { x: "100%", opacity: 1 }, position: 5.2 },


            // //map
            { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 5.3 },
            // { target: ".map", vars: { x: "0%", opacity: 1 }, position: 10.3 },

        ],
        pin: ".story",
    });
};



