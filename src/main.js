import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// Function to display the numbers for the preloader
var id, width = 1;
function loading(){
    id = setInterval(frame, 50);
}
function frame(){
    if(width>=100){
        clearInterval(id)
        load.play();
        document.querySelector('.loader').style.display = "None"
        document.querySelector('.container').style.display = "block"
    }
    else{
        width++;
        document.getElementById("barconfirm").style.width = width + '%';
        document.getElementById("percent").innerHTML = width + '%';
        document.querySelector('.container').style.display = "None"
    }
}
window.onload = function(){
    loading();
}


// Preloader animation
const load = gsap.timeline({
    paused: "true"
})
load.to("#percent , #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
})
load.to(".progress",{
    duration: .8,
    width: "0%"
})
load.from(".content", {
    duration: .8,
    opacity: 0,
    ease: "Power4.out"
}, "-=.5")
load.from(".content h1", {
    duration: .5,
    y: 50,
    skewY: 10,
    opacity: 0
},"-=1")

// The below animation is for the hero section and will continue after the loading has stopped
load.from(".hero-text", {
    y: "50%",
    ease: "power4.easeOut",
    opacity: 0,
    delay: .5
}, 0.15)

gsap.from(".second-section-text-container", {
    x: -500,
    duration: 1,
    scrollTrigger: {
        trigger: ".notification",
        scrub: true,
        start: "top 95%",
    }
})
gsap.from(".my-pic", {
    x: -500,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".my-pic",
        // toggleActions: "play reset play reset",
        start: "top 90%",
    }
})
gsap.from(".about-me-section-text-container", {
    x: 500,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".my-pic",
        // toggleActions: "play reset play reset",
        start: "top 90%",
    }
}, 0.15)
gsap.from(".projects-heading", {
    x: -500,
    duration: .5,
    scrollTrigger: {
        trigger: ".projects-heading",
        toggleActions: "play reset play reset",
        start: "top 90%",

    }
})

// projects section
gsap.from(".projects-list", {
    duration: 1.5,
    y: 500,
    opacity: 0,
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 90%",

    }
})

// Technical writing section
gsap.from(".article-1", {
    duration: 1,
    x: 1000,
    scrollTrigger: {
        trigger: ".articles-container",
        toggleActions: "play reset play reset",
        start: "top 90%",

    }
})

gsap.from(".article-2", {
    duration: 1.5,
    x: 1500,
    opacity: 0,
    scrollTrigger: {
        trigger: ".articles-container",
        toggleActions: "play reset play reset",
        start: "top 87%",

    }
})

gsap.from(".article-3", {
    duration: 2,
    x: 2000,
    opacity: 0,
    scrollTrigger: {
        trigger: ".articles-container",
        toggleActions: "play reset play reset",
        start: "top 85%",

    }
})

gsap.from(".explore-articles", {
    duration: 2.5,
    x: 2000,
    // ease: "bounce.out",
    scrollTrigger: {
        trigger: ".articles-container",
        toggleActions: "play reset play reset",
        start: "top 90%",

    }
})
gsap.from(".contact-heading", {
    y: -150,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contact-heading",
        // toggleActions: "play reset play reset",
        start: "top 95%",
    }
})

// Navbar Toggle
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")


menu.addEventListener("click", () => {
    document.querySelector('.nav').style.transform = "translateX(0%)"
})

close.addEventListener("click", () => {
    document.querySelector('.nav').style.transform = "translateX(-120%)"
})
