const scrolls = document.querySelectorAll('.scroll')

scrolls.forEach( (scroll)=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(scroll,{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:scroll,
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
        } 
    }) 
})
