const modal = document.querySelector('.modal-event');

// Pobierz aktualną datę i czas
const currentDate = new Date();

// Ustaw datę i czas, od którego modal ma przestać się wyświetlać
const endDate = new Date("2023-04-01T19:00:00");

if(currentDate >= endDate) {
    modal.style.display = 'none';
}
else{
    setTimeout(() => {
        modal.classList.remove("hide")
    }, 400);
setTimeout(() => {
   
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}, 30000);

modal.addEventListener('click',()=>{
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});
if(modal){
    document.body.classList.add('modal-open');
}
}


