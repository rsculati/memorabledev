'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/home');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
    .state('main.home', {
      url: '/home',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/home.html',
          controller: 'HomeCtrl as menu'
        }
      }
    })
    .state('main.categories', {
      url: '/categories/:area',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/categorie.html',
          controller: 'CategoriesCtrl as menu'
        }
      }
    })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListCtrl as menu'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});

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

'use strict';
angular.module('main')
.service('Main', function ($log, $timeout) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});

'use strict';
angular.module('main')
.controller('MenuCtrl', function () {

  // $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);

});

'use strict';
angular.module('main')
.controller('ListCtrl', function ($scope, servicePlaces) {

  $scope.itemsList = [];

  servicePlaces.getPlacesNearMeByCategory().success(function (data) {

    for (var i = 0; i < data.length; i++) {
      //  $scope.itemsList.push(data[i].place);
      $scope.itemsList.push({'name': data[i].doc.name});
      // console.log(data[i]);
    }
  });

});

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

'use strict';
angular.module('main')
.controller('DebugCtrl', function ($log, Main, Config, $cordovaDevice) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

  // bind data from services
  this.someData = Main.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));

  // PASSWORD EXAMPLE
  this.password = {
    input: '', // by user
    strength: ''
  };
  this.grade = function () {
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  };
  this.grade();

});

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

'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});

'use strict';
angular.module('memorable', [
  // load your modules here
  'main' // starting with the main module
]);
