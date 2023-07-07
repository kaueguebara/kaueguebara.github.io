const btnRight = window.document.querySelector('.button-arrow.-right')
const btnLeft = window.document.querySelector('.button-arrow.-left')
const elements = window.document.querySelector('.elements')
let pixels = 20

btnRight.addEventListener('click', function () {
    pixels = pixels + 20;
    elements.style = `transform: TranslateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function () {
    pixels = pixels - 20;
    elements.style = `transform: TranslateX(${pixels}px)`;
})