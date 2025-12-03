import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const quotes = gsap.utils.toArray(".subtitle__item");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".spit__subtitle",
        start: "top 10%",
        end: "bottom 30%",
        scrub: true,
    }
});

quotes.forEach(quote => {
    tl.to(quote, {
        opacity: 1,
        y: 0,
        duration: 0.3
    });
});


gsap.fromTo(".mouth1",
    { x: "-50vw" },    
    {
        x: "10%",        
        ease: "none",
        scrollTrigger: {
            trigger: ".mouth1",
            start: "top 50%",
            end: "+=500",
            scrub:true, 
        }
    }
);

const mouths = gsap.utils.toArray(".mouth2");
mouths.forEach(mouth=> {
    gsap.fromTo(mouth, {
        x: "-50vw"},
        {
            x: "10%",          
            ease: "none",
            scrollTrigger: {
                trigger: ".mouth1",
                start: "top 50%",
                end: "+=500",
                scrub: true,
            }
    }

    )
})


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