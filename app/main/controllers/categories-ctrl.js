'use strict';
angular.module('main')
.controller('CategoriesCtrl', function ($state, $scope, $ionicHistory) {

  $scope.changeState = function () {

    $ionicHistory.nextViewOptions({
      disableAnimate: true
    });

    $state.go('main.list');
  };

});
