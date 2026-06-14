Shery.mouseFollower()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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
    images : [ "./image4.jpg" ,"./image1.jpg" , "./image3.jpg"]
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
