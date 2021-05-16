/*Boton de Cerrar formulario*/
const closeButton = document.querySelector('.close-button')
const formInput = document.querySelector('#form');

const closeForm = () => formInput.checked = false;

closeButton.addEventListener('click', closeForm);
