const prevArrow = document.querySelector('.header .arrow.prev');
const nextArrow = document.querySelector('.header .arrow.next');
const header = document.querySelector('.header');

const prevImage = () => {
    const actualImage = header.style.backgroundImage.split('slide')[1].split('.')[0];
    let newImageNumber;

    actualImage === "1" ? newImageNumber = 4 : newImageNumber = parseInt(actualImage) - 1;
    const newImage = `url('./assets/images/slide${newImageNumber}.jpg')`;

    header.style.backgroundImage = newImage;
}
const nextImage = () => {
    const actualImage = header.style.backgroundImage.split('slide')[1].split('.')[0];
    let newImageNumber;

    actualImage === "4" ? newImageNumber = 1 : newImageNumber = parseInt(actualImage) + 1;
    const newImage = `url('./assets/images/slide${newImageNumber}.jpg')`;

    header.style.backgroundImage = newImage;
}

let interval = setInterval(nextImage, 5000);

prevArrow.addEventListener('click', () => {
    clearInterval(interval)
    prevImage();
    interval = setInterval(nextImage, 5000);
});
nextArrow.addEventListener('click', () => {
    clearInterval(interval)
    nextImage();
    interval = setInterval(nextImage, 5000);
});