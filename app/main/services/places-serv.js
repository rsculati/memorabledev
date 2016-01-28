'use strict';
angular.module('main')
  .factory('servicePlaces', function serviceMap ($http) {
    return {
      getPlacesNearMeByCategory: function () {
        return $http.get('https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/3000/category');
        // 'https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/3000/category'
      },
      getPlacesByCategoryArea: function () {
        return $http.get('https://memorablebackend.herokuapp.com/api/places/category/area');
      },
      getAreasNearMe: function () {
        return $http.get('https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/distance/area');
        // 'https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/3000/area'
      }
    };
  });
