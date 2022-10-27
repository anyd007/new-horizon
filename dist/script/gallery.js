const galleryContainer = document.querySelector(".gallery-container");
const galleryImages = document.querySelectorAll(".gallery-container__item--img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__img");
const next = document.querySelector(".modal__next");
const prev = document.querySelector(".modal__prev");
const exit = document.querySelector(".modal__exit");

let counter = 0;
const openModal = e =>{
    galleryImages.forEach((img, index)=>{
        if(e.target === img){
            modalImage.src = img.src
            modal.classList.add("open")
            document.body.classList.add("stopScroll")
            counter = index;
            //dodaje do histori przeglądarki pozycję, dzięki temu wstecz na przeglądarce przy 
            //otwartym modalu zamyka modal a nie całą stronę.
            window.history.pushState({id:1}, null, null)
        }
    })
}


const nextSlide = () =>{
    if(modal.classList.contains("open")){
       
        if(counter >= galleryImages.length -1){
            counter = -1;
        }
        counter++;
        modalImage.src = galleryImages[counter].src
    }
}

const prevSlide = () =>{
    if(modal.classList.contains("open")){
        if(counter <= 0){
            counter = galleryImages.length
        }
        counter--;
        modalImage.src = galleryImages[counter].src
    }
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
next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)
exit.addEventListener("click", ()=>{
    modal.classList.remove("open")
    document.body.classList.remove("stopScroll")
})
//listiner na okno przeglądaki
window.addEventListener("popstate", ()=>{ 
    modal.classList.remove("open")
    document.body.classList.remove("stopScroll")
})