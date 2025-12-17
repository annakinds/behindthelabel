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
        animations: [
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

    //filter 
    pinAndAnimate({
        trigger: ".filter",
        animations: [
            {
                target: ".filter__word",
                vars: {
                    onUpdate: function () {
                        const progress = this.progress(); // 0 → 1
                        const maxR = 10;
                        const count = Math.round(progress * maxR);

                        this.targets()[0].textContent = "O" + "R".repeat(count + 1);
                    }
                }
            }
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

//heroimage interaction
const shakeScreen = () => {
    const heroimg = document.querySelector(".heroimg");
    const flapIsnt = document.querySelector(".flap-isnt");
    const maskIsnt = document.querySelector(".mask-isnt");
    const flapDistracted = document.querySelector(".flap-distracted");
    const maskDistracted = document.querySelector(".mask-distracted");
    const flapLazy= document.querySelector(".flap-lazy");
    const maskLazy= document.querySelector(".mask-lazy");
    const flapOnline= document.querySelector(".flap-online");
    const maskOnline= document.querySelector(".mask-online");
    let hasShaken = false;
    const threshold = 15;

    const handleMotionEvent = (event) => {
        if (hasShaken) return;

        const x = event.accelerationIncludingGravity.x;
        const y = event.accelerationIncludingGravity.y;
        const z = event.accelerationIncludingGravity.z;

        const totalAcceleration = Math.sqrt(x * x + y * y + z * z);

        if (totalAcceleration > threshold) {
            flapIsnt.id = "flap-isnt";
            maskIsnt.id = "label_mask-isnt";
            flapDistracted.id = "flap-distracted";
            maskDistracted.id = "label_mask-distracted";
            flapLazy.id = "flap-lazy";
            maskLazy.id = "label_mask-lazy";
            flapOnline.id = "flap-online";
            maskOnline.id = "label_mask-online";
            hasShaken = true;
        }
    };

    heroimg.addEventListener("click", () => {
        flapIsnt.id = "flap-isnt";
        maskIsnt.id = "label_mask-isnt";
        flapDistracted.id = "flap-distracted";
        maskDistracted.id = "label_mask-distracted";
        flapLazy.id = "flap-lazy";
        maskLazy.id = "label_mask-lazy";
        flapOnline.id = "flap-online";
        maskOnline.id = "label_mask-online";
        hasShaken = true;
    });
    window.addEventListener("devicemotion", handleMotionEvent);

}

shakeScreen();
setupScrollAnimations();
