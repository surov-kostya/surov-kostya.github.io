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
//         loop:true,
//         items:1,
//         autoHeight:true
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

    function toggleAnimationClass(animClass, animLmnt){
        animLmnt.addClass(animClass);
        setTimeout(()=>{
            animLmnt.removeClass(animClass); 
        }, 500);
    }

    prevBtn.on('click', e =>{
        e.preventDefault();
        let slideItemActive = $('.burgers__item_active');

        if (slideItemActive.prev(slideItem).length){
            slideItemActive.prev(slideItem).removeClass('visually-hidden');
            slideItemActive.prev(slideItem).addClass('zoomIn');
            slideItemActive.prev(slideItem).addClass('burgers__item_active');
            slideItemActive.addClass('visually-hidden');
            slideItemActive.removeClass('burgers__item_active'); 
            slideItemActive.removeClass('zoomIn');
        }else{
            toggleAnimationClass('bounceIn', prevBtn);                      
        };
        
        
    });

    nextBtn.on('click', e =>{
        e.preventDefault();

        let slideItemActive = $('.burgers__item_active');

        if (slideItemActive.next(slideItem).length){
            slideItemActive.next(slideItem).removeClass('visually-hidden');
            slideItemActive.next(slideItem).addClass('burgers__item_active');
            slideItemActive.next(slideItem).addClass('zoomIn');
            slideItemActive.addClass('visually-hidden');
            slideItemActive.removeClass('burgers__item_active');
            slideItemActive.removeClass('zoomIn');  
        }else{
            toggleAnimationClass('bounceIn', nextBtn);                      
        };

    });

});
