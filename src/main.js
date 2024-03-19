import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline()

tl.from(".hero-text", {
    duration: 1,
    opacity: 0,
})