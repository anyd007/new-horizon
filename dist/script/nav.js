const header = document.querySelector("header")
const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-main");
const navItems = document.querySelectorAll(".nav-main__item");

let showMenu = false;

const toggleMenu = () =>{
    if(!showMenu){
        document.querySelector("body").classList.add("stopScroll")
        header.classList.add("open")
        burger.classList.add("open")
        nav.classList.add("open");
        navMenu.classList.add("open")
        navItems.forEach(item=>{
            item.classList.add("open")
        })
        showMenu = true;
    }
    else{
        document.querySelector("body").classList.remove("stopScroll")
        header.classList.remove("open")
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

