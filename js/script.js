gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({ yoyo: true, repeat: -1 }); //repeat -1 makes it an infinite loop
//gsap stagger delays the function
//Letter "G" animation
tl.from(".letter1", {
  duration: 0.2,
  y: 10,
  stagger: 0.25, //
  opacity: 100,
});

//Letter "E"´animation
tl.from(".letter2", {
  duration: 0.2,
  y: 10,
  stagger: 0.25,
  opacity: 100,
});

//Animating the letters in the container

//Check out gsap DOC https://greensock.com/docs/v3/GSAP
//Check out gsap common mistakes https://greensock.com/mistakes/

//Animating with ScrollTrigger

let back = gsap.timeline({
  //This needs to be finished, create like a "snake" going between the text in introduction
  scrollTrigger: {
    trigger: ".container-body-head",
    start: "top center",
    end: "top top",
  },
});

//Display content when loaded
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1000);
});
