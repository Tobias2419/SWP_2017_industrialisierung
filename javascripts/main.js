jQuery.noConflict();

var map;
var markers = new Array;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.930, lng: 11.240},
    zoom: 8,
    minZoom: 8,
    maxZoom: 20,

    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,

    styles: [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {"color": "#000000"}
    ]
  },{
    "elementType": "geometry",
    "stylers": [
      {"color": "##494949"}
    ]
  },{
    "elementType": "labels",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#523735"}
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      {"color": "#f5f1e6"}
    ]
  },{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#494949"}
    ]
  },{
    "featureType": "administrative.land_parcel",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#dcd2be"}
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#ae9e90"}
    ]
  },{
    "featureType": "administrative.neighborhood",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#93817c"}
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {"color": "#a5b076"}
    ]
  },{
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#447530"}
    ]
  },{
    "featureType": "road",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {"color": "#f5f1e6"}
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {"color": "#fdfcf8"}
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {"color": "#f8c967"}
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#e9bc62"}
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {"color": "#e98d58"}
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#db8555"}
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#806b63"}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#8f7d77"}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {"color": "#ebe3cd"}
    ]
  },{
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {"color": "#b9d3c2"}
    ]
  },{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#92998d"}
    ]
  }
]
  });
}


// Login-Box
jQuery( document ).ready(function() {
    // run the currently selected effect
        function runEffect() {
          // get effect type from
          var selectedEffect = $( "drop" ).val();

          // Most effect types need no options passed by default
          var options = {};
          // some effects have required parameters
          if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
          } else if ( selectedEffect === "size" ) {
            options = { to: { width: 280, height: 185 } };
          }

         // Run the effect
          $( "#effect" ).toggle( selectedEffect, options, 500 );
          };

        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
          runEffect();
        });

        $( "#effect" ).hide();
      });

// jQuery UI Effekte
jQuery( document ).ready(function() {
  // Zeitstrahl
  var FULL_TIMESPAN = [1850, 1950];         // Konstanten

  jQuery( "#slider" ).slider({
    range: true,
    min: FULL_TIMESPAN [0],
    max: FULL_TIMESPAN [1],
    values: [FULL_TIMESPAN [0], FULL_TIMESPAN [1]],
  });
});

// Legende
jQuery( document ).ready(function() {

  var showType = [true, true, true, true];  // welche Datentypen auf Karte angezeigt werden

  function toggleShowenType(ID) {
    toggleType = showType [ID];
    toggleType = !toggleType;
    showType [ID] = toggleType;
  };

  // initialisiere Legende
  jQuery( ".legendItem" ).addClass( "activeLegendItem" );

  // Legenden-Funktionalität
  jQuery( ".legendItem" ).on('click', function(){
    var clickedItem = jQuery(this);
    var clickedItemID = clickedItem.attr('rel');

    toggleShowenType(clickedItemID);

    jQuery(clickedItem).toggleClass( "activeLegendItem" );

    // Variablen Test
    jQuery(".test").append("<li>"+ clickedItemID.toString() + " " + toggleType.toString() +"</li>");

  });
});

// Pop-In Buttons
jQuery( document ).ready(function() {

  jQuery( ".pop_button" ).on('click', function() {

    if (jQuery(this).attr('rel') == 1) {
      jQuery( "#legend" ).toggle();
    } else {
      jQuery( "#info" ).toggle();
    };

  });
});
