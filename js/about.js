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

text.from(".passion p", {
  ScrollTrigger: ".passion",
  y: 100,
  ease: "power4.out",
  delay: 0.4,
  skewY: 10,
  opacity: 0,
  stagger: 0.4,
  toggleActions: "play none none none",
});
