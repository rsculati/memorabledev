'use strict';
angular.module('main')
.controller('HomeCtrl', function ($state, $scope, $ionicHistory) {

  $scope.nearme = 'nearme';
  $scope.test = 'test';

  $scope.changeState = function (parameter) {
    console.log(parameter);
    $ionicHistory.nextViewOptions({
      disableAnimate: true
    });

    $state.go('main.categories', { area: parameter });
  };

});
