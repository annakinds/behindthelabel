import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".subtitle", {
    scrollTrigger: '.subtitle', 
    x: 200,
    duration: 1,
});



