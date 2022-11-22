const members = document.querySelectorAll(".about__members")
const images = document.querySelectorAll(".about__members--img")

const options ={
    threshold: 1,
    rootMargin: "0px 0px -50px 0px",
   }
const apperOnScroll = new IntersectionObserver((entries, apperOnScroll)=>{
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }
      if(entry.isIntersecting){
      images.forEach(img=>{
        img.classList.add("open")
      })
    }
      apperOnScroll.unobserve(entry.target);
    })
}, options);
members.forEach((member) => {
apperOnScroll.observe(member);
});
