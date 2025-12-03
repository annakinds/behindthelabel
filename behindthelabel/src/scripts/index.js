import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

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



