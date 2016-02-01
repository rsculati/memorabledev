'use strict';
angular.module('main')
.controller('ListDetailCtrl', function ($scope, $cordovaGeolocation) {

  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
    /*eslint-disable */
    var latLngPlace = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      navigationControl: false,
      draggable: false,
      center: latLngPlace,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.TRANSIT
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var latLngPlace = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLngPlace
      });
    });
    /*eslint-enable */
  }, function (error) {
    console.log('Could not get location' + error);
  });

});
