import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
import { pinAndAnimate } from '../../components/Animate.js'

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
            { target: ".bling1", vars: { opacity: 1 }, position: 0.2 },
            { target: ".bling2", vars: { opacity: 1 }, position: 0.3 },
            { target: ".bling3", vars: { opacity: 1 }, position: 0.4 },


            
        ],
        pin: ".story",
    });
};


