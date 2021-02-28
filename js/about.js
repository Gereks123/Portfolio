//Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const text = gsap.timeline();

text.from(".about-content p", 1.5, {
  y: 100,
  ease: "power4.out",
  delay: 0.4,
  skewY: 10,
  opacity: 0,
  stagger: 0.4,
});

text.from(
  "#contact-img",
  1.5,
  {
    x: -100,
    ease: "power4.out",
    skewY: 10,
    opacity: 0,
  },
  0.75
);

/* let passion_animation = gsap.utils.toArray(".change"); //////this needs FIXING

passion_animation.forEach((change) => {
  gsap.from(change, 1.7, {
    scrollTrigger: {
      trigger: ".change",
      start: "-150px center",
      toggleActions: "play none none none",
    },
    y: 100,
    ease: "power4.out",
    delay: 0.4,
    skewY: 10,
    opacity: 0,
    stagger: 1,
  });
}); */

//Prevent contact button from sending back to top of the page
document.getElementById("prevent").addEventListener("click", function (e) {
  e.preventDefault();
});
