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
            start: `top center`,
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

    

};

setupScrollAnimations();

//shake of those labels
gsap.fromTo(".shakeboard1",
    { rotation: -10 },
    {
        rotation: 10,
        duration: 0.15,
        repeat: 5,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".shakeboard1",
            start: "top center", 
            toggleActions: "play none none none"
        },
        onComplete() {
            gsap.to(".shakeboard1", {
                rotation: 0,     
                duration: 0.4,   
                ease: "sine.out" 
            });
        }
    }
);

const eyes = gsap.utils.toArray(".eye");

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".eyes",
        start: "-40% top",
        end: "+=1500",  
        scrub: true,
        pin: true,           
    }
});

eyes.forEach((eye, i) => {
    tl2.to(eye, {
        opacity: 1,
        scale: 1,
    }, i); 
});