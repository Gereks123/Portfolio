'use strict';
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

//End of the letter animations

/*Projects fadeout animation*/
let fade = gsap.utils.toArray(".project");

fade.forEach((project, i) => {
  ScrollTrigger.create({
    start: "top center",
    trigger: project,
    toggleClass: "active",
    toggleActions: "play none none none", //first value reacts when the selected object is in the view of the viewer.
  });
});

/*This is not working YET!!!!!*/
//gsap.utils.toArray("button").forEach((button) => {
  //let hover = gsap.to(".close", {
    //backgroundColor: "white",
  //});
  //button.addEventListener("mouseenter", () => hover.play());
  //button.addEventListener("mouseleave", () => hover.reverse());
//});

/*End of projects animation*/
//Animating the letters in the container

//Check out gsap DOC https://greensock.com/docs/v3/GSAP
//Check out gsap common mistakes https://greensock.com/mistakes/

//Animating with ScrollTrigger

/* let back = gsap.timeline({
  //This needs to be finished, create like a "snake" going between the text in introduction
  scrollTrigger: {
    trigger: ".container-body-head",
    start: "top center",
    end: "top top",
  },
}); */

//Display content when loaded
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.remove("stop-scroll"); //Removes scroll lock when page is loaded. 
    document.body.classList.add("loaded"); 
    gsap.from("#container-image", { x: 250, duration: 2, opacity: 0 }); //animation for the image to appear
  }, 1000);
});
