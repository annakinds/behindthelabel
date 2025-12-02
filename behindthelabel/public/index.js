import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const items = gsap.utils.toArray(".subtitle__item");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".subtitle",
        start: "top 10%",     
        end: "bottom 30%",   
        scrub: true,       
    }
});

items.forEach(item => {
    tl.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.3
    });
});