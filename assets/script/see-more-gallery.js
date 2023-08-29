const images = document.querySelectorAll('.gallery-main__item--img')    
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__img");
const next = document.querySelector(".modal__next");
const prev = document.querySelector(".modal__prev");
const exit = document.querySelector(".modal__exit");

let counter = 0;

images.forEach((img, index)=>{
    img.addEventListener('click', (e)=>{
         modalImage.src = img.src
        modal.classList.add("open")
        document.body.classList.add("stopScroll")
        counter = index;
         //dodaje do histori przeglądarki pozycję, dzięki temu wstecz na przeglądarce przy 
        //otwartym modalu zamyka modal a nie całą stronę.
        window.history.pushState({id:1}, null, null)
    })
})

const nextSlide = () =>{
    console.log("hi");
    if(modal.classList.contains("open")){
      
        if(counter >= images.length -1){
            counter = -1;
        }
        counter++;
        modalImage.src = images[counter].src
    }
}

const prevSlide = () =>{
    if(modal.classList.contains("open")){
        if(counter <= 0){
            counter = images.length
        }
        counter--;
        modalImage.src = images[counter].src
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

// Inicjalizacja Hammer.js na elemencie galerii
const hammer = new Hammer(modal);

// Ustawienie opcji dla Hammer.js (możesz dostosować według potrzeb)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

// Obsługa gestu przesunięcia w prawo (poprzedni slajd)
hammer.on('swiperight', () => {
    prevSlide();
});

// Obsługa gestu przesunięcia w lewo (następny slajd)
hammer.on('swipeleft', () => {
    nextSlide();
});

next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)
exit.addEventListener("click", ()=>{
    modal.classList.remove("open")
    document.body.classList.remove("stopScroll")
})