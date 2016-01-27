'use strict';
angular.module('main')
.controller('HomeCtrl', function ($state, $scope, $ionicHistory) {

  $scope.changeState = function () {

    $ionicHistory.nextViewOptions({
      disableAnimate: true
    });

    $state.go('main.categories');
  };

});
