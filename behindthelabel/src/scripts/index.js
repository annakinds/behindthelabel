import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//navigation
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});


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
    const headerOffset = header.offsetHeight - 1;

    const quotes = gsap.utils.toArray(".subtitle__item");
    const mouths = gsap.utils.toArray(".mouth2");
    const eyes = gsap.utils.toArray(".eye");

    //quotes
    const quoteAnimations = quotes.map((quote, index) => ({
        target: quote,
        vars: { opacity: 1, y: 0, duration: 0.5 },
        position: index === 0 ? 0 : "+=0.3"
    }));
    pinAndAnimate({
        trigger: ".spit__subtitle",
        animations: quoteAnimations,
        headerOffset
    });

    //mouths
    pinAndAnimate({
        trigger: ".mouth1",
        animations: [
            { target: ".mouth1", vars: { x: "10%" } },
        ],        
        headerOffset
    });
    const mouthAnimations = mouths.map((mouth, index) => ({
        target: mouth,
        vars: { x: "10%" },
    }))
    pinAndAnimate({
        trigger: ".mouth1",
        animations: mouthAnimations,
        headerOffset
    });

    //shakeboards
    pinAndAnimate({
        trigger: ".shake__imgs",
        animations:[
            { target: ".shakeboard1", vars: { rotate: "10deg" } },
            { target: ".shakeboard2", vars: { rotate: "10deg", height: "12rem", width: "110%" } },
            { target: ".shakeboard3", vars: { rotate: "10deg", height: "16rem", width: "120%" } },
            { target: ".shakeboard4", vars: { rotate: "10deg", height: "20rem", width: "120%" } },
            // { target: ".shakeboard5", vars: { rotate: "10deg", height: "24rem", width: "120%" } },
            // { target: ".shakeboard6", vars: { rotate: "10deg", height: "28rem", width: "120%" } },
            { target: ".shakeboard1", vars: { rotate: "-10deg" } },
            { target: ".shakeboard2", vars: { rotate: "-10deg" } },
            { target: ".shakeboard3", vars: { rotate: "-10deg" } },
            { target: ".shakeboard4", vars: { rotate: "-10deg" } },
            // { target: ".shakeboard5", vars: { rotate: "-10deg" } },
            // { target: ".shakeboard6", vars: { rotate: "-10deg" } },


        ], 
        headerOffset,
        yoyo: true
    });

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