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
}

const prevSlide = function () {
    if (index !== 0) {
        index--;
        activeSlide(index)
    }
}

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);