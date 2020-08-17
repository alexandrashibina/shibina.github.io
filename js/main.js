const arrowRight = document.querySelector('.arrow--right');
const arrowLeft = document.querySelector('.arrow--left');
const slideWidth = document.querySelector('.slider__item');
const sliderRoot = document.getElementById('sliderRoot');
const sliderList = document.querySelector('.slider__list');

let sliderPosition = 0;

arrowsRight.forEach((arrow) => {
    arrow.addEventListener ('click', (e) => moveRight ());
});

arrowsLeft.forEach((arrow) => {
    arrow.addEventListener ('click', (e) => moveLeft ());
});

sliderList.addEventListener ('swiped-right', ()=> moveLeft());
sliderList.addEventListener ('swiped-left', ()=> moveRight());

function moveRight () {
    sliderPosition += slideWidth.clientWidth;

    if (sliderPosition === sliderList.scrollWidth) {
        sliderPosition = 0;
    }

    sliderRoot.style.transform = `translate(-${sliderPosition}px)`;  
}

function moveLeft () {
    if (sliderPosition === 0) {
        sliderPosition = sliderList.scrollWidth - slideWidth.clientWidth;
    }else{
        sliderPosition -= slideWidth.clientWidth;
    }

    sliderRoot.style.transform = `translate(-${sliderPosition}px)`;
}