const headerWrapper = document.querySelector('.header-wrapper');
const openMenuBtn = document.querySelector('.header-wrapper__toggle-menu');
const closeMenuBtn = document.querySelector('.header-wrapper__close-menu');

openMenuBtn.addEventListener('click', () => {
    headerWrapper.classList.toggle('header-wrapper--active');
})

closeMenuBtn.addEventListener('click', () => {
    headerWrapper.classList.toggle('header-wrapper--active');
})


const videoBlock = document.querySelector('.video-wrapper__video');
const openVideoBtn = document.querySelector('.video-wrapper__btn');
const closeVideoBtn = document.querySelector('.video-block__close-btn');

openVideoBtn.addEventListener('click', () => {
    videoBlock.classList.toggle('video-wrapper__video--active');
})

closeVideoBtn.addEventListener('click', () => {
    videoBlock.classList.toggle('video-wrapper__video--active');
})