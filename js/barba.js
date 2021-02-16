//First init barba

function pageTransition() {
    let tl = gsap.timeline(); //First we create a gsap page transition

    tl.to('ul.transition li', {duration: .1, scaleY: 1, transformOrigin: "bottom left", stagger: .2 }) //transformOrigin changes from where the content will start to transform, if ommited, it would start from the center.
    //Below code makes it fade away
    tl.to('ul.transition li', {duration: .1, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay:.1 })
}


function delay(i) { //this is the function for the delay, i is the given input for the function
    i = i || 2000;
        return new Promise(done => {
            setTimeout(() =>{
                done();
            }, i);
        }); 
}

function contentAnimation() {
    let tl = gsap.timeline();
    tl.to('#container-image', {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}, "-=1.1 " )
}


barba.init({
    sync: true, //asynchronous is true!
    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition(); //This has to be firstly defined
            await delay(1500);
            done();  
        },

        async enter(data) {
            contentAnimation();
            
        },
        async once(data) { //once the page is loaded at first
            contentAnimation();
        }
    }]
})