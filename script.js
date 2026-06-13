Shery.mouseFollower()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.makeMagnet(".magnet")

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
          scrub:1
    },
    y:"-300%",
    ease:Power1
  
})
let sections = document.querySelectorAll(".fleftelem")
Shery.imageEffect(".images", {
  style: 1,
  slideStyle: (setScroll) => {
    sections.forEach((section , index)=>{
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress+index)
            }

        })
    })

  },
});