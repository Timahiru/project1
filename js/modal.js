// HW3

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close');


function showModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}


function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = ''; 
}


closeModalBtn.addEventListener('click', closeModal);


let modalWasShown = false;

const modalTimer = setTimeout(() => {
  if (!modalWasShown) {
    showModal();
    modalWasShown = true;
  }
}, 10000);


function showModalOnScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    if (!modalWasShown) {
      showModal();
      modalWasShown = true;
      window.removeEventListener('scroll', showModalOnScroll);
    }
  }
}

window.addEventListener('scroll', showModalOnScroll);
