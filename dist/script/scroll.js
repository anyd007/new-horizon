const scrollArrow = document.querySelector(".scrollArrow");


const showScroll = () =>{
let scrolled = window.scrollY;
if(scrolled > 200){
    scrollArrow.classList.add("open");
}
else{
    scrollArrow.classList.remove("open")
}
}

window.addEventListener("scroll", showScroll)
scrollArrow.addEventListener("click", ()=>{
    document.documentElement.scrollTop = 0;
})