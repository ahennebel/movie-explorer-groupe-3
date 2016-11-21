'use strict';

/**
 * @ngdoc overview
 * @name movieExplorerApp
 * @description
 * # movieExplorerApp
 *
 * Main module of the application.
 */
angular
  .module('movieExplorerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movie/:movieId', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
