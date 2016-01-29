'use strict';
angular.module('main')
.controller('CategoriesCtrl', function ($state, $scope, $ionicHistory, $stateParams) {

  console.log($stateParams.area);

  $scope.changeState = function () {

    $ionicHistory.nextViewOptions({
      disableAnimate: true
    });

    $state.go('main.list');
  };

});
