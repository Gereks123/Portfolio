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
    width: "100%",
  }); //transformOrigin changes from where the content will start to transform, if ommited, it would start from the center.
  //Below code makes it fade away
  tl.to("ul.transition li", {
    duration: 0.2,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.2,
    width: "100%",
  });

  //When the page is refreshed, scroll back to the top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
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

//Project apperaing content
function projectAppear() {
  //Projects fadeout animation
  let fade = gsap.utils.toArray(".project");

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
}

/*About page function*/
function aboutPage() {
  const text = gsap.timeline();

  text.from(".about-content p", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 0.3,
    skewY: 10,
    opacity: 0,
    stagger: 0.4,
  });

  text.from(
    "#contact-img",
    2,
    {
      x: -100,
      ease: "power4.out",
      skewY: 10,
      opacity: 0,
    },
    0.75
  );
}

//Barba INIT for the page transitions
barba.init({
  sync: true, //asynchronous is true!
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition(); //This has to be firstly defined
        await delay(1000);
        done();
      },

      async enter(data) {
        aboutPage();
      },

      async after(data) {
        //Rerun the project appear code for it to run
        projectAppear();
      },
    },
  ],
});

//Katse
