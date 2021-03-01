"use strict";
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  yoyo: true,
  repeat: -1,
}); //repeat -1 makes it an infinite loop

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
/*


fade : [Object | String | NodeList | Array] - The target(s) that you want wrapped in a flattened Array 
(it can be selector text, objects, NodeList, jQuery objects, etc.
*/

//gsap.utils provides gsaps's own utility functions.
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

//Skills fade in for the iamges to appear.

let skills_tl = gsap.utils.toArray(".skill_img");

skills_tl.forEach((skill_img, i) => {
  ScrollTrigger.create({
    start: "top center",
    trigger: skill_img,
    toggleClass: "active",
    toggleActions: "play none none none",
  });
});

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

//When the page is refreshed, scroll back to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//Scrolls to the top onload
window.scrollTo(0, 0);

//Display content when loaded
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.remove("stop-scroll"); //Removes scroll lock when page is loaded.
    document.body.classList.add("loaded");
    gsap.from(".container-image", {
      x: 250,
      duration: 2,
      opacity: 0,
    }); //animation for the image to appear
    //Animate container name (German Eksi, a webdeveloper fadeIn)
    gsap.from(".container_name", {
      y: 250,
      duration: 2,
      opacity: 0,
    });
  }, 1000);
});
