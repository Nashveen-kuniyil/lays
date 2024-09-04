

gsap.from("#products h2",{
    opacity:0,
    duration:1,
    x:-500,
    scrollTrigger:{
        trigger:"#products",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})


gsap.from(".grid-container",{
    opacity:0,
    duration:1,
    y:500,
    scrollTrigger:{
        trigger:"#products",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})



gsap.from("#recipe h2",{
    opacity:0,
    duration:1,
    x:-500,
    scrollTrigger:{
        trigger:"#recipe",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})


gsap.from(".grid-item1",{
    opacity:0,
    duration:0.8,
    y:500,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#recipe",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})


gsap.from("#youtube h2",{
    opacity:0,
    duration:1,
    y:500,
    scrollTrigger:{
        trigger:"#youtube",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})


gsap.from("#video1",{
    opacity:0,
    duration:0.8,
    x:-700,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#youtube",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})


gsap.from("#social h2",{
    opacity:0,
    duration:1,
    x:-300,
    scrollTrigger:{
        trigger:"#social",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})

gsap.from("#iconsfoot",{
    opacity:0,
    duration:0.9,
    y:130,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#foot",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})

// ease: "power1.inOut"
// ease: "power2.out"
// ease: "power3.in" 
// ease: "power4.inOut"
// ease: "back.out"
// ease: "bounce.out"
// ease: "elastic.out(1, 0.3)"
// ease: "circ.inOut"
// ease: "expo.inOut"
// ease: "sine.inOut"