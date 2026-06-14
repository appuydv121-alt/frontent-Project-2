Shery.mouseFollower()

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

Shery.makeMagnet(".magnet")
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
Shery.hoverWithMediaCircle(".hvr" , {
    images : [ "./image4.jpg" ,"./cookies.avif" , "./image3.jpg"]
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".fleftelem" , {
    scrollTrigger:{
        trigger: "#f-images",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
          scrub:1,
          scroller: "#main",
    },
    y:"-300%",
    ease:Power1
  
})
let sections = document.querySelectorAll(".fleftelem")
Shery.imageEffect(".images", {
  style: 4,
  slideStyle: (setScroll) => {
    sections.forEach((section , index)=>{
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress+index)
            },
            scroller: "#main",

        })
    })

  },
});

// Footer Text Animation

const text1 = new SplitType("#footerh11");
const text2 = new SplitType("#footerh12");

gsap.set([...text1.chars, ...text2.chars], {
    y: 120,
    opacity: 0
});

ScrollTrigger.refresh();

gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
})
.to(text1.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.03,
    duration: 0.8,
    ease: "power4.out"
})
.to(text2.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.03,
    duration: 0.8,
    ease: "power4.out"
}, "-=0.5")
.from("#lastfooter", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=0.3");