'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('MainCtrl', function (movies) {
    var ctrl = this;

    ctrl.movies = [];

    movies.getDiscoverMovies().then(function(result)
    {
      ctrl.movies = result;
    });
  });
