const buttonNext = document.querySelector('.right-button');
const buttonPrev = document.querySelector('.left-button');
const slides = document.querySelectorAll('.main-slide');

let index = 0;
const activeSlide = function (n) {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const nextSlide = function () {
    if (index === slides.length - 1) {
        activeSlide(index)
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = function () {
    if (index === 0) {
        activeSlide(index)
    } else {
        index--;
        activeSlide(index)
    }
}

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);