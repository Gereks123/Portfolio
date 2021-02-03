const tl = gsap.timeline({ yoyo: true, repeat: -1 });
//gsap stagger delays the function
//Letter "G" animation
tl.from(".letter1", {
  duration: 0.2,
  y: 10,
  stagger: 0.25,
  opacity: 100,
});

//Letter "E"´animation
tl.from(".letter2", {
  duration: 0.2,
  y: 10,
  stagger: 0.25,
  opacity: 100,
});

//Check out gsap DOC https://greensock.com/docs/v3/GSAP
//Check out gsap common mistakes https://greensock.com/mistakes/
//Display content when the page is loaded

// show page function
function showPage() {
  document.body.classList.remove("state-before-load");
}

//Remove the styling when the page is loaded
window.onload = (event) => {
  showPage();
};
