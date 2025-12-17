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
            { target: ".brush", vars: { opacity: 1 }, position: 0.2 },
            { target: ".brush", vars: { rotate: "90deg" }, position: 0.3 },
            { target: ".anniversary", vars: { opacity: 1, duration: 0 }, position: 0.3 },
            { target: ".yellowstar", vars: { opacity: 1, duration: 0 }, position: 0.8 },
            { target: ".star", vars: { opacity: 1, duration: 0 }, position: 0.8 },
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
            { target: ".brush", vars: { opacity: 0 }, position: 1.5 },
            { target: ".anniversary", vars: { opacity: 0 }, position: 1.5 },
            { target: ".yellowstar", vars: { opacity: 0 }, position: 1.5 },
            { target: ".star", vars: { opacity: 0 }, position: 1.5 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 1.6 },
            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 1.7 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 1.7 },

            // //chapter 2
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 1.8 },
            { target: ".bottle", vars: { opacity: 1 }, position: 1.9 },
            { target: ".bottle", vars: { top: "20vh", left: "30vw" }, position: 2 },
            { target: ".star2", vars: { opacity: 1, scale: .6 }, position: 2.2 },
            { target: ".pop1", vars: { opacity: 1, duration: 0, fontSize: "2rem" }, position: 2.2 },
            { target: ".pop2", vars: { opacity: 1, duration: 0, fontSize: "2rem" }, position: 3 },
            { target: ".pop3", vars: { opacity: 1, duration: 0, fontSize: "2rem" }, position: 2.6 },
            { target: ".pop4", vars: { opacity: 1, duration: 0, fontSize: "2rem" }, position: 3.4 },
            {
                target: ".story__text2",
                vars: { opacity: 1 },
                position: 3.5,
                scramble: {
                    text: text2,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".bottle", vars: { opacity: 0 }, position: 4 },
            { target: ".star2", vars: { opacity: 0 }, position: 4 },
            { target: ".pop1", vars: { opacity: 0 }, position: 4 },
            { target: ".pop2", vars: { opacity: 0 }, position: 4 },
            { target: ".pop3", vars: { opacity: 0 }, position: 4 },
            { target: ".pop4", vars: { opacity: 0 }, position: 4 },
            { target: ".story__text2", vars: { opacity: 0 }, position: 4.1 },
            { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 4.2 },

            // //chapter 3
            { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 4.3 },
            { target: ".bottom3", vars: { x: "-0%", opacity: 1 }, position: 4.3 },
            { target: ".free", vars: { opacity: 1 }, position: 4.4 },
            { target: ".break", vars: { opacity: 1, duration: 0 }, position: 4.6 },
            { target: ".fear", vars: { opacity: 1, duration: 0 }, position: 4.6 },
            { target: ".bigstar1", vars: { opacity: 1, duration: 0 }, position: 4.6 },
            { target: ".bigstar2", vars: {  opacity: 1, duration: 0 }, position: 4.6 },
            { target: ".bigstar1", vars: { scale: 1.2}, position: 5 },
            { target: ".bigstar2", vars: { scale: 1 }, position: 5 },
            {
                target: ".story__text3",
                vars: { opacity: 1 },
                position: 5.1,
                scramble: {
                    text: text3,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".free", vars: { opacity: 0 }, position: 5.6 },
            { target: ".break", vars: { opacity: 0 }, position: 5.6 },
            { target: ".fear", vars: { opacity: 0 }, position: 5.6 },
            { target: ".bigstar1", vars: { opacity: 0 }, position: 5.6 },
            { target: ".bigstar2", vars: { opacity: 0 }, position: 5.6 },
            { target: ".story__text3", vars: { opacity: 0 }, position: 5.7 },
            { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 5.8 },
            { target: ".bottom3", vars: { x: "100%", opacity: 1 }, position: 5.8 },

            // //map
            { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 5.9 },
            { target: ".image-wrapper", vars: { opacity: 0 }, position: 5.9 },
            { target: ".map", vars: { opacity: 1 }, position: 5.9 },

        ],
        pin: ".story",
    });
};



