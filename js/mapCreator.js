/**
 *
  ####   ####   ####   ####  #      ###### ##   ##   ##   #####   ####
 #    # #    # #    # #    # #      #      # # # #  #  #  #    # #
 #      #    # #    # #      #      #####  #  #  # #    # #    #  ####
 #  ### #    # #    # #  ### #      #      #     # ###### #####       #
 #    # #    # #    # #    # #      #      #     # #    # #      #    #
  ####   ####   ####   ####  ###### ###### #     # #    # #       ####

  ####  # #####   ####  #      ######    #####  #####    ##   #    # ###### #####
 #    # # #    # #    # #      #         #    # #    #  #  #  #    # #      #    #
 #      # #    # #      #      #####     #    # #    # #    # #    # #####  #    #
 #      # #####  #      #      #         #    # #####  ###### # ## # #      #####
 #    # # #   #  #    # #      #         #    # #   #  #    # ##  ## #      #   #
  ####  # #    #  ####  ###### ######    #####  #    # #    # #    # ###### #    #

 {with some awesome features}
 *
 *
 * @author Uberto Vittorio Favero
 * @version 0.9
 * © Uberto Vittorio Favero 2011 - all rights reserved -
 *
 * This software is free. Feel free to modify it. If you use it don't be a dork and don't remove this header.
 * If you change it credits are appreciated.
 *
 * This software is given as it is, without any warranty. If your head explodes, probably the fault is not mine; the same
 * if the explosion is referred to your pc.
 *
 * Thank you Google for giving us such awesome API's, which guarantees a solid base to develop on.
 * Thank you Aptana for crashing about 3 times a week, and thank you, my sweet brain.. thank you for what?
 * Well.. thank you for being so badass.
 *
 * Do you need anything or are you a hot chick and u want to stay in touch with the developer?
 * contact me at:
 * 			metalpower.riportodt[at]gmail[dot]com
 *
 */

var latlng;
var map;
var mapBounds;
var mapZoom;
var customMarker = 'img/marker.png';
var myOwnPosition = new google.maps.Marker({
    position: latlng,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: customMarker,
    visible: false 
});
//var circleCenter = map.center;

function generaMappa(id) {
    
    // fornisce latitudine e longitudine
    latlng = new google.maps.LatLng(0,0);

    // imposta le opzioni di visualizzazione
    var options = {
        zoom : 2,
        center : latlng,
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true, 
        navigationControl: true,
        navigationControlOptions: { 
            style: google.maps.NavigationControlStyle.SMALL 
        } ,
        scrollwheel: false, 
        mapTypeControl : true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, 
            position: google.maps.ControlPosition.TOP_RIGHT, 
            mapTypeIds: [ 
            google.maps.MapTypeId.ROADMAP, 
            google.maps.MapTypeId.SATELLITE 
            ]  
        }
    };
    // crea l'oggetto mappa
    map = new google.maps.Map(document.getElementById(id), options);
    //geocode();
    geolocalizeMe();
    drawCircle(null);
    mapBounds = map.getBounds();
    google.maps.event.addListener(map, 'bounds_changed', function() {
        mapBounds = map.getBounds();
        mapZoom = map.getZoom();
    //adaptCircle(map.getBounds());
    });
}

//questa funzione sposta il marcatore in base alle coordinate passate
function aggiungiMarcatorePosizione(posizione){
    myOwnPosition.setOptions({
        position: posizione,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: customMarker,
        visible: true 
    });

    map.setCenter(posizione);
    map.setZoom(15);
    
}
function aggiungiMarcatore(posizione){
    
}

//
//				This function creates the slider and handles the events on it
//
$(document).ready(function() {
    $("#slider-horizontal").slider({
        //orientation : "horizontal",
        range : "min",
        min : 0,
        max : 100,
        value : 0,
        animate : true,
        start : function(event, ui) {
            partito = ui.value;
        },
        slide : function(event, ui) {
            $("#amount").val(ui.value);
            updateCircle(ui.value);
		
        },
        stop : function(event, ui) {
            stoppato = ui.value;
            if(partito < stoppato) {
            //TODO: implement increase
            } else if(partito > stoppato) {
        //TODO: decrease
        }
        }
    });
    $("#amount").val($("#slider-vertical").slider("value"));
});
/*
 * 				This function updates the radius circle and modifies the zoom according to the circle's radius;
 */

function updateCircle(value) {
    cityCircle.setOptions({
        strokeColor : "#CCC",
        strokeOpacity : 0.8,
        strokeWeight : 2,
        radius : value * 50
    });
    $("#amount").val(cityCircle.getRadius() + ' mt');
    circleBounds = cityCircle.getBounds();

    map.setCenter(latlng);
    //calculate distance between bounds of a map.
    var distanceMapBounds = google.maps.geometry.spherical.computeDistanceBetween(mapBounds.getNorthEast(), mapBounds.getSouthWest());
    //idem with the circle.
    var circleBoundsDistance = google.maps.geometry.spherical.computeDistanceBetween(circleBounds.getNorthEast(), circleBounds.getSouthWest());
    $("#distance").val(Math.ceil(distanceMapBounds) / cityCircle.getRadius());
    //if the circle is bigger than the map the zoom self reduces.
    if(circleBounds < mapBounds && mapZoom > 0) {
        map.setZoom(mapZoom - 1);
    }
}

/*
 * 				This function drawes the circle in the map.
 */

function drawCircle(value) {

    var cerchio = {
        map : map,
        center : map.center,
        radius : value * 10
    };
    cityCircle = new google.maps.Circle(cerchio);

}