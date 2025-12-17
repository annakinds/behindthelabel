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
            { target: ".sun", vars: {opacity: 1 }, position: 0.2 },
            { target: ".shine1", vars: { opacity: 1, duration:0 }, position: 0.4 },
            { target: ".shine2", vars: { opacity: 1, duration: 0 }, position: 0.6 },
            { target: ".shine3", vars: { opacity: 1, duration: 0 }, position: 0.8 },
            { target: ".sun", vars: { left:"10vw", opacity:0 }, position: 1 },
            { target: ".shine1", vars: { opacity: 0 }, position: 1 },
            { target: ".shine2", vars: { opacity: 0 }, position: 1 },
            { target: ".shine3", vars: { opacity: 0 }, position: 1 },
            { target: ".thunder", vars: { opacity: 1 }, position: 1 },
            { target: ".flash1", vars: { opacity: 1, duration: 0 }, position: 1.2 },
            { target: ".boom1", vars: { opacity: 1, duration: 0 }, position: 1.4 },
            { target: ".flash2", vars: { opacity: 1, duration: 0 }, position: 1.6 },
            { target: ".boom2", vars: { opacity: 1, duration: 0 }, position: 1.8 },
            {
                target: ".story__text1",
                vars: { opacity: 1 },
                position: 2,
                scramble: {
                    text: text1,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".thunder", vars: { opacity: 0 }, position: 2.5 },
            { target: ".flash1", vars: { opacity: 0 }, position: 2.5 },
            { target: ".boom1", vars: { opacity: 0 }, position: 2.5 },
            { target: ".flash2", vars: { opacity: 0 }, position: 2.5 },
            { target: ".boom2", vars: { opacity: 0 }, position: 2.5 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 2.7 },
            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 3 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 3 },

            // //chapter 2
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 3.1 },
            { target: ".bottom2", vars: { x: "-0%", opacity: 1 }, position: 3.1 },
            { target: ".meter", vars: { opacity: 1 }, position: 3.2},
            { target: ".meter", vars: {left:"-150vw" }, position: 3.5 },
            { target: ".bigstar", vars: { opacity: 1, duration: 0 }, position: 3.5 },
            { target: ".m", vars: { opacity: 1, duration: 0 }, position: 3.5 },
            { target: ".whut1", vars: { opacity: 1, duration: 0 }, position: 3.5 },
            { target: ".whut2", vars: { opacity: 1, duration: 0 }, position: 3.7 },
            { target: ".whut3", vars: { opacity: 1, duration: 0 }, position: 3.9 },
            {
                target: ".story__text2",
                vars: { opacity: 1 },
                position: 4,
                scramble: {
                    text: text2,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".meter", vars: { opacity:0 }, position: 4.5 },
            { target: ".bigstar", vars: { opacity: 0 }, position: 4.5 },
            { target: ".m", vars: { opacity: 0 }, position: 4.5 },
            { target: ".whut1", vars: { opacity: 0 }, position: 4.5 },
            { target: ".whut2", vars: { opacity: 0 }, position: 4.5 },
            { target: ".whut3", vars: { opacity: 0 }, position: 4.5 },
            { target: ".story__text2", vars: { opacity: 0 }, position: 4.6 },
            { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 4.7 },
            { target: ".bottom2", vars: { x: "100%", opacity: 1 }, position: 4.7 },

            // //chapter 3
            { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 4.8 },
            { target: ".bottom3", vars: { x: "-0%", opacity: 1 }, position: 4.8 },
            { target: ".eye1", vars: { opacity: 1 }, position: 4.9 },
            { target: ".eye2", vars: { opacity: 1 }, position: 5.2 },
            { target: ".eye3", vars: { opacity: 1 }, position: 5.5 },
            { target: ".wauw1", vars: { opacity: 1, duration: 0 }, position: 5.8 },
            { target: ".wauw2", vars: { opacity: 1, duration: 0 }, position: 6.1 },
            { target: ".wauw3", vars: { opacity: 1, duration: 0 }, position: 6.4 },
            {
                target: ".story__text3",
                vars: { opacity: 1 },
                position: 6.5,
                scramble: {
                    text: text3,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".eye1", vars: { opacity: 0 }, position: 7 },
            { target: ".eye2", vars: { opacity: 0 }, position: 7 },
            { target: ".eye3", vars: { opacity: 0 }, position: 7 },
            { target: ".wauw1", vars: { opacity:0 }, position: 7 },
            { target: ".wauw2", vars: { opacity: 0 }, position: 7 },
            { target: ".wauw3", vars: { opacity: 0 }, position: 7 },
            { target: ".story__text3", vars: { opacity: 0 }, position: 7.1 },
            { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 7.2 },
            { target: ".bottom3", vars: { x: "100%", opacity: 1 }, position: 7.2 },

            // //map
            { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 7.3 },
            { target: ".image-wrapper", vars: { opacity: 0 }, position: 7.3 },
            { target: ".map", vars: { opacity: 1 }, position: 7.3 },
        ],
        pin: ".story",
    });
};



