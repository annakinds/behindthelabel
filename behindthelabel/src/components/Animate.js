import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export const pinAndAnimate = ({ trigger, end, animations, pin }) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start: "top top",
            end,
            scrub: true,
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

    console.log("pin animate");
    return tl;
};




