'use strict';
angular.module('main')
  .factory('servicePlaces', function serviceMap ($http) {
    return {
      getPlaces: function () {
        return $http.get('https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/3000');
        // 'https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/3000/area'
      }
    };
  });
