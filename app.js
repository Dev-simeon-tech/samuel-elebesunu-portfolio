const hamburgerNav = document.querySelector('.hamburger-cont');
const buttonNav = document.querySelector('.button-nav');

hamburgerNav.addEventListener('click',() => {
    const isOpened = hamburgerNav.getAttribute('aria-expanded');
    if(isOpened === 'false'){
        hamburgerNav.setAttribute('aria-expanded','true')
        buttonNav.setAttribute('data-visible',"true")

    }
    else{
        hamburgerNav.setAttribute('aria-expanded','false') 
        buttonNav.setAttribute('data-visible','false')
    }
})

// observer
const options = {
    root: null,
    threshold: 0.1,

}
// const hiddenItems = document.querySelectorAll('.hidden')

// const observer = new IntersectionObserver( (enteries, observer) =>{
//     enteries.forEach( (entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }
//         else{
//             entry.target.classList.remove('show')
//         }
//         // console.log(entry)
//     })
// }, options)

// hiddenItems.forEach( (hid)=>{
//     observer.observe(hid);

// })
// console.log(hiddenItems)
// observer



gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-1',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-1",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
            
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-2',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-2",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
            
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-3',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-3",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
            
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-4',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-4",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
           
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-5',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-5",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
           
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-6',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-6",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
           
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-7',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-7",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
            
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-8',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-8",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
        } 
    }) 
gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scroll-9',{
        scale:1,
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:".scroll-9",
            start: "top 100%",
            end: "top 60% ",
            scrub: 2,
            toggleActions:"play reverse restart reverse",
            //             onEnter onLeave onEnterBack onleaveBack
        } 
    }) 

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    //   console.log(e)
        return
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
