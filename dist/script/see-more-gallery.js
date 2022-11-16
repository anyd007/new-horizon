import './anime.js';
import './gallery.js'

AOS.init();

document.querySelectorAll('img')
.forEach((img) =>
    img.addEventListener('load', () =>
        AOS.refresh()
    )
);


// window.addEventListener("load", ()=>{
//     const loader = document.querySelector(".loader")
//     loader.classList.add("hidden")
//     loader.addEventListener("transitionend", ()=>{
//         document.body.removeChild("loader")
//     })
// })