const buttonNext = document.querySelector('.right-button');
const buttonPrev = document.querySelector('.left-button');
const slides = document.querySelectorAll('.main-slide');

let index = 0;
const activeSlide = function (n) {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const nextSlide = function () {
    if (index !== slides.length - 1) {
        index++;
        activeSlide(index);
    }
    clearInterval(timer);
    goAhead();
}

const prevSlide = function () {
    if (index !== 0) {
        index--;
        activeSlide(index)
    }
}

let timer;
function goAhead () {
    timer = setInterval(nextSlide,5000);
}
goAhead();

buttonPrev.addEventListener('click', prevSlide);
buttonNext.addEventListener('click', nextSlide);


