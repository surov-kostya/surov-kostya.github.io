ymaps.ready(init);
var myMap;

var placeList = [
    [59.94554327989287,30.38935262114668],
    [59.91142323563909,30.50024587065841],
    [59.88693161784606,30.319658102103713],
    [59.97033574821672,30.315194906302924]
];

function init(){     
    var myMap = new ymaps.Map("map", {
        center: [59.91817154482064,30.30557799999997],
        zoom: 11,
        controls: [],
        behaviors: ['scrollZoom']
    });

    myMap.behaviors.disable('scrollZoom');

    for (var i = 0; i < placeList.length; i++) {
        myPlacemark = new ymaps.Placemark(placeList[i], { 
            hintContent: 'Burgers', 
            balloonContent: 'Caffee'            
        },
        
        {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-26, -52]
        }
    );

        myMap.geoObjects.add(myPlacemark);
    }
}