'use strict';
angular.module('main')
.controller('ListCtrl', function ($scope, servicePlaces) {

  $scope.itemsList = [];

  servicePlaces.getPlacesNearBy().success(function (data) {

    for (var i = 0; i < data.length; i++) {
      //  $scope.itemsList.push(data[i].place);
      $scope.itemsList.push({'name': data[i].doc.name});
      // console.log(data[i]);
    }
  });


});
