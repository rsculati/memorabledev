'use strict';
angular.module('main')
.controller('ListCtrl', function ($scope) {

  $scope.itemsList = [];

  /**
   * fills the itemsList variable with data to be displayed on the page
   */
  function populateList () {
      // adds a new element (specified JSON object) to $scope.itemsList
    $scope.itemsList.push({'name': 'Tanah-lot Temple'});
    $scope.itemsList.push({'name': 'Mount Batur'});
    $scope.itemsList.push({'name': 'Ulun Danu Temple'});
    $scope.itemsList.push({'name': 'Uluwatu Temple'});
  }

  // call function to populate list
  populateList();

});
