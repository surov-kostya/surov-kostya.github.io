// --------------- HAMBURGER MENU ------------------

let hamburgerBtn = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.fullscreen-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'flex';
});

let hamburgerExitBtn = document.querySelector('.exit-btn');

hamburgerExitBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none';
});

// ------- TEAM ACCORDION WITH VANILLA JS -----------------

let personNameBtns = document.querySelectorAll('.persons__link');
let personItems = document.querySelectorAll('.persons__item');



for(let i = 0; i < personNameBtns.length; i++){
    personNameBtns[i].addEventListener('click', (e) => {
        e.preventDefault();
        // REMOVE ACTIVE-CLASS FOR ALL ITEMS AFTER CLICK
        for(let x = 0; x < personItems.length; x++){
        personItems[x].classList.remove('persons__item_active');
        }
        // ADD ACTIVE-CLASS FOR CHOSEN ITEM
        e.currentTarget.parentNode.classList.toggle('persons__item_active');
        });
    };


// --------- MENU ACCORDION WITH JQUERY -------------------



$('.menu-acco__link').on('click', (e)=>{
    e.preventDefault();
    // REMOVE ACTIVE-CLASS FOR ALL ITEMS AFTER CLICK
    $('.menu-acco__item').removeClass('menu-acco__item_active');
    // ADD ACTIVE-CLASS FOR CHOSEN ITEM
    $(e.currentTarget).parent().toggleClass('menu-acco__item_active');
})

