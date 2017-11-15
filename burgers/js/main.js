// --------------- HAMBURGER MENU ------------------

let hamburgerBtn = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.fullscreen-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.style.zIndex = 1;
});

let hamburgerExitBtn = document.querySelector('.exit-btn');

hamburgerExitBtn.addEventListener('click', () => {
    hamburgerMenu.style.zIndex = -1;
})