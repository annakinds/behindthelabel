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
            { target: ".megaphone", vars: { opacity: 1 }, position: 0.2 },
            { target: ".different4", vars: { opacity: 1 }, position: 0.3 },
            { target: ".different3", vars: { opacity: 1 }, position: 0.5 },
            { target: ".different2", vars: { opacity: 1 }, position: 0.7 },
            { target: ".different1", vars: { opacity: 1 }, position: 0.9 },
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
            { target: ".megaphone", vars: { opacity: 0 }, position: 1.5 },
            { target: ".different4", vars: { opacity: 0 }, position: 1.5 },
            { target: ".different3", vars: { opacity: 0 }, position: 1.5 },
            { target: ".different2", vars: { opacity: 0 }, position: 1.5 },
            { target: ".different1", vars: { opacity: 0 }, position: 1.5 },
            { target: ".story__text1", vars: { opacity: 0 }, position: 1.6 },
            { target: ".top1", vars: { x: "-100%", opacity: 1 }, position: 1.7 },
            { target: ".bottom1", vars: { x: "100%", opacity: 1 }, position: 1.7 },

            // //chapter 2
            { target: ".top2", vars: { x: "0%", opacity: 1 }, position: 1.8 },
            { target: ".bottom2", vars: { x: "-0%", opacity: 1 }, position: 1.8 },
            { target: ".clap", vars: { opacity: 1 }, position: 2 },
            { target: ".hand1", vars: { opacity: 1 }, position: 2 },
            { target: ".hand2", vars: { opacity: 1 }, position: 2 },
            { target: ".hand1", vars: { left: "5vw", top: "5vh" }, position: 2.5 },
            { target: ".hand2", vars: { left: "30vw", top: "15vh" }, position: 2.5 },
            { target: ".star", vars: { opacity: 1 }, position: 2.7 },
            {
                target: ".story__text2",
                vars: { opacity: 1 },
                position: 3,
                scramble: {
                    text: text2,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".clap", vars: { opacity: 0 }, position: 3.5 },
            { target: ".hand1", vars: { opacity: 0 }, position: 3.5 },
            { target: ".hand2", vars: { opacity: 0 }, position: 3.5 },
            { target: ".star", vars: { opacity: 0 }, position: 3.5 },
            { target: ".story__text2", vars: { opacity: 0 }, position: 3.6 },
            { target: ".top2", vars: { x: "-100%", opacity: 1 }, position: 3.7 },
            { target: ".bottom2", vars: { x: "100%", opacity: 1 }, position: 3.7 },

            // //chapter 3
            { target: ".top3", vars: { x: "0%", opacity: 1 }, position: 3.8 },
            { target: ".person1", vars: { opacity: 1 }, position: 3.9 },
            { target: ".person2", vars: { opacity: 1 }, position: 4.2 },
            { target: ".person3", vars: { opacity: 1 }, position: 4.5 },
            { target: ".person4", vars: { opacity: 1 }, position: 4.8 },
            {
                target: ".story__text3",
                vars: { opacity: 1 },
                position: 5,
                scramble: {
                    text: text3,
                    chars: ".",
                    speed: 0.3,
                    revealDelay: 0.05,
                }
            },
            { target: ".person1", vars: { opacity: 0 }, position: 5.5 },
            { target: ".person2", vars: { opacity: 0 }, position: 5.5 },
            { target: ".person3", vars: { opacity: 0 }, position: 5.5 },
            { target: ".person4", vars: { opacity: 0 }, position: 5.5 },
            { target: ".story__text3", vars: { opacity: 0 }, position: 5.6 },
            { target: ".top3", vars: { x: "-100%", opacity: 1 }, position: 5.7 },

            // //map
            { target: ".top4", vars: { x: "0%", opacity: 1 }, position: 5.8 },
            // { target: ".map", vars: { x: "0%", opacity: 1 }, position: 10.3 },

        ],
        pin: ".story",
    });
};



