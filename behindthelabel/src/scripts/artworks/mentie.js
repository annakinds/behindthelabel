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


            // {
            //     target: ".story__text1",
            //     vars: { opacity: 1 },
            //     position: 1.8,
            //     scramble: {
            //         text: text1,
            //         chars: ".",
            //         speed: 0.3,
            //         revealDelay: 0.05,
            //     }
            // },


            // { target: ".story__text1", vars: { opacity: 0 }, position: 2.7 },
            // { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 3 },
            // { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 3 },

            // //chapter 2
            // { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 3.1 },

            // {
            //     target: ".story__text2",
            //     vars: { opacity: 1 },
            //     position: 5,
            //     scramble: {
            //         text: text2,
            //         chars: ".",
            //         speed: 0.3,
            //         revealDelay: 0.05,
            //     }
            // },
          
            // { target: ".story__text2", vars: { opacity: 0 }, position: 5.6 },
            // { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 5.6 },

            // //chapter 3
            // { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 5.7 },
          

            // {
            //     target: ".story__text3",
            //     vars: { opacity: 1 },
            //     position: 6.5,
            //     scramble: {
            //         text: text3,
            //         chars: ".",
            //         speed: 0.3,
            //         revealDelay: 0.05,
            //     }
            // },
           
            // { target: ".story__text3", vars: { opacity: 0 }, position: 7.5 },
            // { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 7.6 },

            // //map
            // { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 8 },
            // { target: ".map", vars: { x: "0%", opacity: 1 }, position: 10.3 },

        ],
        pin: ".story",
    });
};



