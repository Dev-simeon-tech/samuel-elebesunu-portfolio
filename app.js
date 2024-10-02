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




    
