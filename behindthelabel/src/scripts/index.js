import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const quotes = gsap.utils.toArray(".subtitle__item");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".subtitle",
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

const mouth = gsap.utils.toArray(".mouth1");

gsap.to(mouth, {
    scrollTrigger: mouth, 
    x: 500
});