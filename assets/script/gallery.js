
const galleryMain = document.querySelector(".gallery_main");
const slides = document.querySelectorAll(".gallery_main__item");
const galleryImages = document.querySelectorAll(".gallery_main__item--img");
const nextSlideBtn = document.querySelector(".next_slide");
const prevSlideBtn = document.querySelector(".prev_slide");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__img");
const next = document.querySelector(".modal__next");
const prev = document.querySelector(".modal__prev");
const exit = document.querySelector(".modal__exit");


let counter = 0;
//licznik slidera
let slideCount = 0;
//szerokość slajdu
let slideWidth = galleryMain.getBoundingClientRect().width;

//klon pierwszego slajdu
const cloneFirstSlide = slides[0].cloneNode(true);
galleryMain.appendChild(cloneFirstSlide)

//klon ostatniego slajdu
const cloneLastSlide = slides[slides.length - 1].cloneNode(true);
const firstSlide = slides[0]
galleryMain.insertBefore(cloneLastSlide, firstSlide)

//ustawianie pozycji na pierwszy slajd
galleryMain.style.left = -slideWidth + 'px'




    galleryImages.forEach((img, index)=>{
        img.addEventListener('click', (e)=>{
             modalImage.src = img.src
            modal.classList.add("open")
            document.body.classList.add("stopScroll")
            counter = index;
            clearInterval(intervalID)
             //dodaje do histori przeglądarki pozycję, dzięki temu wstecz na przeglądarce przy 
            //otwartym modalu zamyka modal a nie całą stronę.
            window.history.pushState({id:1}, null, null)
        })
    })



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

const nextPrevKey = (e) =>{
    if(e.key ===  'ArrowLeft'){
      return  prevSlide()
    }
    if(e.key === 'ArrowRight'){
        return nextSlide()
    }
    if(e.key === 'Escape'){
        modal.classList.remove("open")
        document.body.classList.remove("stopScroll")
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

// Inicjalizacja Hammer.js na elemencie galerii
const hammer = new Hammer(galleryMain);

// Ustawienie opcji dla Hammer.js (możesz dostosować według potrzeb)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

// Obsługa gestu przesunięcia w prawo (poprzedni slajd)
hammer.on('swiperight', () => {
    prevSlideHandler();
});

// Obsługa gestu przesunięcia w lewo (następny slajd)
hammer.on('swipeleft', () => {
    nextSlideHandler();
});

//funkcja przesuwania slajdów
const moveToSlide = (index) =>{
    let moveSlide = slideWidth * index
    galleryMain.style.transform = `translateX(-${moveSlide}px)`
}

const nextSlideHandler = () => {
    clearInterval(intervalID)

    nextSlideFunction()

    moveToSlide(slideCount)

    intervalID = setInterval(() => {
        nextSlideFunction()
        moveToSlide(slideCount)
        }, 4000);
}
const prevSlideHandler = () =>{
    clearInterval(intervalID)

    PrevSlideFunction()

    moveToSlide(slideCount)

    intervalID = setInterval(() => {
        nextSlideFunction()
        moveToSlide(slideCount)
        }, 4000);
}

let nextSlideFunction = () =>{
    slideCount++;
    if(slideCount >= slides.length +1) {
        galleryMain.style.transition = 'none';
        slideCount = 0;
        setTimeout(() => {
            slideCount++;
            galleryMain.style.transition = "all 0.5s linear";
            galleryMain.style.transform = `translateX(-${slideWidth}px)`
        }, 50);
       }
}
let PrevSlideFunction = () =>{
    slideCount--;
    if(slideCount < 0) {
        galleryMain.style.transition = 'none';
        slideCount = slides.length
        setTimeout(() => {
            slideCount--;
            galleryMain.style.transition = "all 0.5s linear";
            galleryMain.style.transform = `translateX(-${slideWidth * slideCount}px)`
        }, 50);
    }
}
let intervalID = setInterval(() => {
    nextSlideFunction()
    moveToSlide(slideCount)
    }, 4000);

next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)
exit.addEventListener("click", ()=>{
    modal.classList.remove("open")
    document.body.classList.remove("stopScroll")
    intervalID = setInterval(() => {
        nextSlideFunction()
        moveToSlide(slideCount)
        }, 5000);
})
document.addEventListener("keyup", nextPrevKey)
//listiner na okno przeglądaki
window.addEventListener("popstate", ()=>{ 
    modal.classList.remove("open")
    document.body.classList.remove("stopScroll")
})

nextSlideBtn.addEventListener("click", nextSlideHandler)
prevSlideBtn.addEventListener("click", prevSlideHandler)