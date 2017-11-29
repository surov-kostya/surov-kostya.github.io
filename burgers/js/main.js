// --------------- HAMBURGER MENU ------------------

$(function(){

    let hamburgerBtn = $('.hamburger');
    let hamburgerMenu = $('.fullscreen-menu');
    let hamburgerExitBtn = $('.exit-btn');
    let anyMenuItem = $('.fullscreen-menu__link');

    hamburgerBtn.on('click', () => {
        hamburgerMenu.css({'display': 'flex'});
    });   

    hamburgerExitBtn.on('click', () => {
        hamburgerMenu.toggle();
    });

    anyMenuItem.on('click', () => {
        hamburgerMenu.fadeOut();
    });

    hamburgerMenu.on('mousewheel', e =>{
        e.preventDefault();
        e.stopPropagation();
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

    $('.menu-acco__text').dotdotdot();

    $('.menu-acco__link').on('click', (e)=>{
        e.preventDefault();

        const thisItemLink = e.currentTarget;
        const thisItem = $(e.currentTarget).parent();        

        $('.menu-acco__item').not(thisItem).removeClass('menu-acco__item_active');
        thisItem.toggleClass('menu-acco__item_active');
        $('.menu-acco__item_active .menu-acco__text').dotdotdot();
    });

    $('.menu_empty-block').on('click', e =>{
        e.preventDefault();
        $('.menu-acco__item').removeClass('menu-acco__item_active');        
    });
});

// ---------- BURGER CONSISTANCE TABLE TOGGLE ---------------

$(function(){
    $('.consist__btn').on("mouseenter mouseleave", (e) =>{
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

                // ------------------- TOUCHSWIPE -------------------

    slideItem.swipe( {allowPageScroll:"auto",
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            
            let slideItemActive = $('.burgers__item_active');
            if (direction == 'left') {            
                let slideItemNext = slideItemActive.next(slideItem);

                if (slideItemNext.length){
                    toggleAnimationClass(regularBtnAction, prevBtn);
                    changeActiveClass(slideItemNext, slideItemActive, nextSlideAction);
                }else{
                    toggleAnimationClass(btnAction, nextBtn);                      
                }; 
            }else if (direction == 'right') {
                let slideItemPrev = slideItemActive.prev(slideItem);  
                
                if (slideItemPrev.length){
                    toggleAnimationClass(regularBtnAction, nextBtn);                    
                    changeActiveClass(slideItemPrev, slideItemActive, prevSlideAction);
                }else{
                    toggleAnimationClass(btnAction, prevBtn);                      
                };
            };  
        }
    });
});



// ---------------------- FULLPAGE.JS ---------------------------

$(function (){
    $('#fullpage').fullpage({
        anchors:['Page1', 'Page2', 'Page3','Page4', 'Page5', 'Page6','Page7', 'Page8'],
        menu: '#menu',
        responsiveWidth: 800
    });
});



// ---------------------- REVIEW POPUP ---------------------

$(function(){
    const popup = $('.review__popup');
    const popupInfo = $('.popup__text');
    const popupUser = $('.popup__username');

    popup.hide();

    $('.comment__btn').on('click', e=>{
        let user = $(e.currentTarget).siblings('.comment__username').text();
        let review = $(e.currentTarget).siblings('.comment__text').text();
        
        console.log(user);
        console.log(review);

        popupUser.html(user);
        popupInfo.html(review);
        popup.fadeIn();
    });

    $('.close-btn').on('click', e=>{
        popupUser.empty();
        popupInfo.empty();
        popup.fadeOut();
    });
});



// -------------------- ORDER MESSAGE --------------------------

$(function(){

    $('.order-message').hide();

    $('.order__form').on('submit', e=>{
        e.preventDefault();

        let form = $(e.currentTarget),
            url = form.attr('action'),
            data = form.serialize();            
            request = $.ajax({
                type: 'POST',
                url: url,
                data: data,
                dataType: 'JSON'
            });

        request.done(function(mes) {
            if (mes.status === 'OK') {
                orderMsg.prepend('<span class="order-message__text">' + mes.msg + '</span>');
            } else {
                orderMsg.prepend('<span class="order-message__text">' + mes.msg + '</span>');
            }
        });

        $('.order-message').show();

    });

    $('.order-message__btn').on('click', e=>{
        e.preventDefault();
        $('.form__reset').trigger('click');
        $('.order-message').hide();
        $('.order-message__text').remove();
    });
});
