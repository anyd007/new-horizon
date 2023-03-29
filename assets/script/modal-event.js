const modal = document.querySelector('.modal-event');
setTimeout(() => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}, 30000);

const closeModal = () =>{
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}
if(modal){
    document.body.classList.add('modal-open');
}
modal.addEventListener('click', closeModal);

