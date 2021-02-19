//Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

//First init barba

function pageTransition() {
  let tl = gsap.timeline(); //First we create a gsap page transition

  tl.to("ul.transition li", {
    duration: 0.1,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  }); //transformOrigin changes from where the content will start to transform, if ommited, it would start from the center.
  //Below code makes it fade away
  tl.to("ul.transition li", {
    duration: 0.1,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}

function delay(i) {
  //this is the function for the delay, i is the given input for the function
  i = i || 2000;
  return new Promise((done) => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    setTimeout(() => {
      done();
    }, i);
  });
}

function contentAnimation() {
  let tl = gsap.timeline();
  tl.to(
    ".container-image",
    {
      clipPath: "inset(0 0 0 0)",
      opacity: 1,
    },
    "-=1.1"
  );
}

//Project apperaing content
function projectAppear() {
  //Projects fadeout animation
  let fade = gsap.utils.toArray(".project");

  fade.forEach((project, i) => {
    ScrollTrigger.create({
      start: "top center",
      trigger: project,
      toggleClass: "active",
      toggleActions: "play none none none", //first value reacts when the selected object is in the view of the viewer.
    });
  });
}

barba.init({
  sync: true, //asynchronous is true!
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition(); //This has to be firstly defined
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
      },
      async once(data) {
        //once the page is loaded at first
        contentAnimation();
      },

      async after(data) {
        //Rerun the project appear code for it to run
        projectAppear();
      },
    },
  ],
});

//Katse
