import './anime.js';
import './gallery.js'
const galleryTitle = document.querySelector("#title")
const backBtn = document.querySelector("#back-btn")

AOS.init();

document.querySelectorAll('img')
.forEach((img) =>
    img.addEventListener('load', () =>
        AOS.refresh()
    )
);


window.addEventListener("load", ()=>{
    galleryTitle.classList.add("open")
    backBtn.classList.add("open")
    // const loader = document.querySelector(".loader")
    // loader.classList.add("hidden")
    // loader.addEventListener("transitionend", ()=>{
    //     document.body.removeChild("loader")
    // })
})