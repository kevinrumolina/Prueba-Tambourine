/*Boton de Cerrar formulario*/
const closeButton = document.querySelector('.close-button')
const formInput = document.querySelector('#form');

const closeForm = () => formInput.checked = false;

closeButton.addEventListener('click', closeForm);

/*image slider*/
const imagesBaseSrc = './assets/'
const sliderContainer = document.querySelector('.header');
let intervalCounter = 1;

setInterval(function() {
    sliderContainer.style.backgroundImage = `url("../assets/images/slide${intervalCounter}.jpg")`
    intervalCounter === 4 ? intervalCounter = 1 : intervalCounter += 1;
},8000);

