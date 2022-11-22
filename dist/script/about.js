const members = document.querySelectorAll(".about__members--img")


window.addEventListener("load", ()=>{
    members.forEach(member=>{
        member.classList.add("open")
    })
})