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
      .when('/logged', {
        templateUrl: 'views/main-logged.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movie/:movieId', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movieCtrl'
      })
      .when('/movie/:movieId/casting', {
        templateUrl: 'views/casting.html',
        controller: 'MovieCtrl',
        controllerAs: 'movieCtrl'
      })
      .when('/search/:query/', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/parameters', {
        templateUrl: 'views/parameters.html',
        // controller: 'MovieCtrl',
        // controllerAs: 'movieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });