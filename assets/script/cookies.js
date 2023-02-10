const cookiesItem = document.querySelector(".cookies")
const cookiesBtn = document.querySelector(".cookies__btn")

let cookies = localStorage.getItem("cookies", "off") || "on"

const cookieBannerOff = () =>{
    cookiesItem.classList.add("close")
    cookies = "off"
    localStorage.setItem("cookies", cookies)
}
if(cookies === "off"){
    cookiesItem.style.display = "none"
}

cookiesBtn.addEventListener("click", cookieBannerOff)