const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-main");
const navItems = document.querySelectorAll(".nav-main__item");

let showMenu = false;

const toggleMenu = () =>{
    if(!showMenu){
        burger.classList.add("open")
        nav.classList.add("open");
        navMenu.classList.add("open")
        navItems.forEach(item=>{
            item.classList.add("open")
        })
        showMenu = true;
    }
    else{
        burger.classList.remove("open");
        nav.classList.remove("open")
        navMenu.classList.remove("open")
        navItems.forEach(item=>{
            item.classList.remove("open")
        })
        showMenu = false;
    }
}

menuBtn.addEventListener("click", toggleMenu)
navMenu.addEventListener("click", toggleMenu)

