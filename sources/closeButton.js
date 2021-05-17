/*Boton de Cerrar formulario*/
const closeButton = document.querySelector('.close-button')
const bookNowButton = document.querySelector('.form-container__title')
const formInput = document.querySelector('#form');
const darkBackground = document.querySelector('.dark-background');

const closeForm = () => {
    darkBackground.style.visibility = "hidden"
    formInput.checked = false;
}

closeButton.addEventListener('click', closeForm);



