const firstParallaxLayers = document.querySelectorAll('.first-parallax__img');

const moveLayers = e =>{
    console.log(e)
    const initialY = (window.innerHeight / 2) - e.pageY;
    let k = 1;
    for(let i=0; i<firstParallaxLayers.length; i++){
        if(i <= 2) {
            k = i + 20;
        } else if (i <= 4) {
            k = i * 4;
        } else if (i <=5 ){
            k = i * 3;
        } else {k = i*2};
        
        let finalY = initialY / (k/ 1.5);
        firstParallaxLayers[i].style.transform = `translateY(${finalY}px)`;
    };
}

window.addEventListener('scroll', moveLayers);