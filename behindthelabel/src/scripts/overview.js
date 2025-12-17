import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const pinAndAnimate = ({
    trigger,
    endTrigger,
    pin,
    animations,
    markers = false,
    headerOffset = 0,
}) => {
    const end = `top top+=${headerOffset}`;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start: `top 60%`,
            endTrigger,
            end,
            scrub: true,
            pin,
            pinSpacing: false,
            markers: markers,
            invalidateOnRefresh: true,
        },
    });

    animations.forEach(({ target, vars, position = 0 }) => {
        tl.to(target, vars, position);
    });

    return tl;
}

const header = document.querySelector(".header");
const setupScrollAnimations = () => {
    const headerOffset = header ? header.offsetHeight - 1 : 0;
    const eyes = gsap.utils.toArray(".eye");

    //eye
    const eyeAnimations = eyes.map((eye, index) => ({
        target: eye,
        vars: { opacity: 1 },
        position: index === 0 ? 0 : `+=0.3`

    }))

    pinAndAnimate({
        trigger: ".eyes",
        animations: eyeAnimations,
        headerOffset,
    });

};

setupScrollAnimations();
