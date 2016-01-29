'use strict';
angular.module('main')
.controller('HomeCtrl', function ($state, $scope, $ionicHistory) {

  $scope.nearme = 'nearme';


  $scope.changeState = function (parameter)
    $ionicHistory.nextViewOptions({
      disableAnimate: true
    });

    $state.go('main.categories', { area: parameter });
  };

});
