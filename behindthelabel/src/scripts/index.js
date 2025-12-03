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


gsap.fromTo(".mouth1",
    { x: "-100vw" },       // start buiten links
    {
        x: "70vw",          // eindigt buiten rechts
        ease: "none",
        scrollTrigger: {
            trigger: ".mouth1",
            start: "top 90%",
            end: "top -20%",
            scrub:true, 
        }
    }
);

const mouths = gsap.utils.toArray(".mouth2");
mouths.forEach(mouth=> {
    gsap.fromTo(mouth, {
        x: "-100vw"},
        {
            x: "70vw",          
            ease: "none",
            scrollTrigger: {
                trigger: ".mouth1",
                start: "top 90%",
                end: "top -20%",
                scrub: true,
            }
    }

    )
})

