// --------------- HAMBURGER MENU ------------------

$(function(){

    let hamburgerBtn = $('.hamburger');
    let hamburgerMenu = $('.fullscreen-menu');
    let hamburgerExitBtn = $('.exit-btn');

    hamburgerBtn.on('click', () => {
        hamburgerMenu.toggle();
    });   

    hamburgerExitBtn.on('click', () => {
        hamburgerMenu.toggle();
    });

});

// --------------------- TEAM ACCORDION --------------------------

$(function(){

    let personNameBtns = $('.persons__link');

    personNameBtns.on('click', (e) => {
        e.preventDefault();

        const thisItemLink = e.currentTarget;
        const thisItem = $(e.currentTarget).parent();

        $('.persons__item').not(thisItem).removeClass('persons__item_active');
        thisItem.toggleClass('persons__item_active');
    });
});

// --------------------- MENU ACCORDION -------------------------


$(function(){
    $('.menu-acco__link').on('click', (e)=>{
        e.preventDefault();

        const thisItemLink = e.currentTarget;
        const thisItem = $(e.currentTarget).parent();

        $('.menu-acco__item').not(thisItem).removeClass('menu-acco__item_active');
        thisItem.toggleClass('menu-acco__item_active');
    });
});

// ---------- BURGER CONSISTANCE TABLE TOGGLE ---------------

$(function(){
    $('.consist__btn').on('click', (e) =>{
        e.preventDefault();
        $('.consist-table').toggle();
    });
});


// ------------------- MY SLIDER ----------------------

$(function(){

    const prevBtn = $('.burgers__btn_prev');
    const nextBtn = $('.burgers__btn_next');
    const ctrlBtn = $('.burgers__btn');
    const slideItem = $('.burgers__item');
    const btnAction = 'wobble';
    const regularBtnAction = 'rubberBand';
    const prevSlideAction = 'bounceInLeft';
    const nextSlideAction = 'bounceInRight';

    function toggleAnimationClass(animClass, animLmnt){
        animLmnt.addClass(animClass);
        setTimeout(()=>{
            animLmnt.removeClass(animClass); 
        }, 500);
    };

    function changeActiveClass(notActLmnt, activeLmnt, slideAction){
        activeLmnt.addClass('visually-hidden');
        activeLmnt.removeClass('burgers__item_active');
        notActLmnt.addClass('burgers__item_active');
        notActLmnt.removeClass('visually-hidden');
        activeLmnt.removeClass(slideAction);
        notActLmnt.addClass(slideAction);
        notActLmnt.removeClass('visually-hidden');
    };

    prevBtn.on('click', e =>{
        e.preventDefault();
        

        let slideItemActive = $('.burgers__item_active');
        let slideItemPrev = slideItemActive.prev(slideItem);  

        if (slideItemPrev.length){
            toggleAnimationClass(regularBtnAction, prevBtn);
            changeActiveClass(slideItemPrev, slideItemActive, prevSlideAction);
        }else{
            toggleAnimationClass(btnAction, prevBtn);                      
        };
        
        
    });

    nextBtn.on('click', e =>{
        e.preventDefault();
        

        let slideItemActive = $('.burgers__item_active');
        let slideItemNext = slideItemActive.next(slideItem);  

        if (slideItemNext.length){
            toggleAnimationClass(regularBtnAction, nextBtn); 
            changeActiveClass(slideItemNext, slideItemActive, nextSlideAction);
        }else{
            toggleAnimationClass(btnAction, nextBtn);                      
        };

        
    });

});


// ---------------------- FULLPAGE.JS ---------------------------

$(function (){
    $('#fullpage').fullpage({
        anchors:['Page1', 'Page2', 'Page3','Page4', 'Page5', 'Page6','Page7', 'Page8'],
        menu: '#menu'
    });
});
