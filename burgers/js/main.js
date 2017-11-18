// --------------- HAMBURGER MENU ------------------

$(function(){

    let hamburgerBtn = document.querySelector('.hamburger');
    let hamburgerMenu = document.querySelector('.fullscreen-menu');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerMenu.style.display = 'flex';
    });

    let hamburgerExitBtn = document.querySelector('.exit-btn');

    hamburgerExitBtn.addEventListener('click', () => {
        hamburgerMenu.style.display = 'none';
    });

});

// ------- TEAM ACCORDION WITH VANILLA JS -----------------

$(function(){

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

});

// --------- MENU ACCORDION WITH JQUERY -------------------


$(function(){
    $('.menu-acco__link').on('click', (e)=>{
        e.preventDefault();
        // REMOVE ACTIVE-CLASS FOR ALL ITEMS AFTER CLICK
        $('.menu-acco__item').removeClass('menu-acco__item_active');
        // ADD ACTIVE-CLASS FOR CHOSEN ITEM
        $(e.currentTarget).parent().toggleClass('menu-acco__item_active');
    });
});

// ---------- BURGER CONSISTANCE TABLE TOGGLE ---------------

$(function(){
    $('.consist__btn').on('click', (e) =>{
        e.preventDefault();
        $('.consist-table').toggle();
    });
});

// -------------------- OWL CAROUSEL ------------------------

// $(function(){

    

//     $(".owl-carousel").owlCarousel({
//         loop:false,
//         items:1,
//         autoHeight:true,
//         autoWidth:true
//     });
        
//     var owl = $('.owl-carousel');
//     owl.owlCarousel();
        
//     // Go to the next item
//     $('.burgers__btn_next').click(function() {
//         owl.trigger('next.owl.carousel');
//     })
//     // Go to the previous item
//     $('.burgers__btn_prev').click(function() {
//         // With optional speed parameter
//         // Parameters has to be in square bracket '[]'
//         owl.trigger('prev.owl.carousel', [300]);
//     })
    
   

// })

// ------------------- MY SLIDER ----------------------

$(function(){

    const prevBtn = $('.burgers__btn_prev');
    const nextBtn = $('.burgers__btn_next');
    const ctrlBtn = $('.burgers__btn');
    const slideItem = $('.burgers__item');
    const btnAction = 'wobble';
    const regularBtnAction = 'rubberBand';
    const prevSlideAction = 'bounceInRight';
    const nextSlideAction = 'bounceInLeft';

    function toggleAnimationClass(animClass, animLmnt){
        animLmnt.addClass(animClass);
        setTimeout(()=>{
            animLmnt.removeClass(animClass); 
        }, 500);
    };

    function changeActiveClass(notActLmnt, activeLmnt, slideAction){
        activeLmnt.addClass('visually-hidden');
        activeLmnt.removeClass('burgers__item_active');
        activeLmnt.removeClass(slideAction);

        setTimeout(()=>{
            notActLmnt.removeClass('visually-hidden');
            notActLmnt.addClass(slideAction);
            notActLmnt.addClass('burgers__item_active');
        }, 200);
                
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
        anchors:['firstPage', 'secondPage', 'thirdPage']
    });


});