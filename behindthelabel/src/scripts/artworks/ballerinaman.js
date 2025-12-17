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
            { target: ".binoculars", vars: { opacity: 1 }, position: 0.2 },
            { target: ".watching1", vars: { opacity: 1, duration: 0 }, position: 0.3 },
            { target: ".binoculars", vars: { left: "-100vw" }, position: 0.6 },
            { target: ".watching2", vars: { opacity: 1, duration: 0 }, position: 0.6 },
            { target: ".binoculars", vars: {left: "-40vw" }, position: 0.9 },
            { target: ".watching3", vars: { opacity: 1, duration: 0 }, position: 0.9 },
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
            { target: ".binoculars", vars: { opacity:0 }, position: 1.5 },
            { target: ".watching1", vars: { opacity: 0 }, position: 1.5 },
            { target: ".watching2", vars: { opacity: 0 }, position: 1.5 },
            { target: ".watching3", vars: { opacity: 0 }, position: 1.5 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 1.6 },
            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 1.7 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 1.7 },

            //chapter 2
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 1.8 },
            { target: ".bottom2", vars: { x: "-0%", opacity: 1 }, position: 1.8 },
            { target: ".yellowstar", vars: { opacity: 1, duration: 0 }, position: 1.9 },
            { target: ".me", vars: { opacity: 1, duration: 0 }, position: 1.9 },
            { target: ".cloud-top", vars: { left:"0vw" }, position: 2.2 },
            { target: ".cloud-bottom", vars: { right: "0vw" }, position: 2.2 },
            {
                target: ".story__text2",
                vars: { opacity: 1 },
                position: 2.7,
                scramble: {
                    text: text2,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".yellowstar", vars: { opacity: 0 }, position: 3.2 },
            { target: ".me", vars: { opacity: 0 }, position: 3.2 },
            { target: ".cloud-top", vars: { opacity:0}, position: 3.2 },
            { target: ".cloud-bottom", vars: { opacity:0}, position: 3.2 },
            { target: ".story__text2", vars: { opacity: 0 }, position: 3.3 },
            { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 3.4 },
            { target: ".bottom2", vars: { x: "100%", opacity: 1 }, position: 3.4 },

            //chapter 3
            { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 3.5 },
            { target: ".bottom3", vars: { x: "-0%", opacity: 1 }, position: 3.5 },
            { target: ".hammer1", vars: { opacity: 1 }, position: 3.6 },
            { target: ".hammer2", vars: { opacity: 1 }, position: 3.6 },
            { target: ".chisel1", vars: { opacity: 1 }, position: 3.6 },
            { target: ".chisel2", vars: { opacity: 1 }, position: 3.6 },
            { target: ".hammer1", vars: { rotate: "-40deg" }, position: 3.7 },
            { target: ".hammer2", vars: { rotate: "140deg" }, position: 3.7 },
            { target: ".bam1", vars: { opacity: 1, duration: 0 }, position: 4 },
            { target: ".bam2", vars: { opacity: 1, duration: 0 }, position: 4 },
            { target: ".bigstar1", vars: { opacity: 1, duration: 0 }, position: 4 },
            { target: ".bigstar2", vars: { opacity: 1, duration: 0 }, position: 4 },
            {
                target: ".story__text3",
                vars: { opacity: 1 },
                position: 4.5,
                scramble: {
                    text: text3,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".chisel1", vars: { opacity: 0 }, position: 5.2 },
            { target: ".chisel2", vars: { opacity: 0 }, position: 5.2 },
            { target: ".hammer1", vars: { opacity:0 }, position: 5.2},
            { target: ".hammer2", vars: { opacity:0 }, position: 5.2 },
            { target: ".bam1", vars: { opacity: 0 }, position: 5.2 },
            { target: ".bam2", vars: { opacity: 0 }, position: 5.2 },
            { target: ".bigstar1", vars: { opacity: 0 }, position: 5.2 },
            { target: ".bigstar2", vars: { opacity: 0 }, position: 5.2 },
            { target: ".story__text3", vars: { opacity: 0 }, position: 5.3 },
            { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 5.5 },
            { target: ".bottom3", vars: { x: "100%", opacity: 1 }, position: 5.5 },

            //map
            { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 5.5 },
            { target: ".image-wrapper", vars: { opacity: 0 }, position: 5.5 },
            { target: ".map", vars: { opacity: 1 }, position: 5.5 },        ],
        pin: ".story",
    });
};



