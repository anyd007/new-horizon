const galleryContainer = document.querySelector(".gallery-container");
const galleryImages = document.querySelectorAll(".gallery-container__item--img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__img");

const openModal = e =>{
    galleryImages.forEach((img, index)=>{
        if(e.target === img){
            modalImage.src = img.src
            modal.classList.add("open")
            document.body.classList.add("stopScroll")
        }
    })
}

//efekt pojawiania się zdjęć w galeri, lazyloader
const options ={
    threshold: 1,
    rootMargin: "0px 0px 200px 0px",
   }
const apperOnScroll = new IntersectionObserver((entries, apperOnScroll)=>{
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }
      apperOnScroll.unobserve(entry.target);
    })
}, options);
galleryImages.forEach((galleryImage) => {
apperOnScroll.observe(galleryImage);
});

galleryContainer. addEventListener("click", openModal)
modal.addEventListener("click", ()=>{
    modal.classList.remove("open")
    document.body.classList.remove("stopScroll")

})