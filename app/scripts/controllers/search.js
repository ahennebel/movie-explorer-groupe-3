'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the movieExplorerApp
 */

angular.module('movieExplorerApp')
  .controller('SearchCtrl', function ($routeParams, $scope, movies) {
    var ctrl = this;

    $scope.movieName;

    ctrl.movies = [];

    movies.getConfiguration().then(function(result){
      ctrl.configuration = result;
    });

    movies.getMoviesByKeyword($routeParams.query).then(function(result){
      ctrl.movies = result;
    });

    ctrl.getQuery = function(){
      return $routeParams.query;
    }

    ctrl.getPosterURL = function(path,size)
    {
      if(ctrl.configuration)
      {
        if(path != null){
          return ctrl.configuration.images.secure_base_url + size + path;
        } else {
          return '../images/no-poster.png';
        }
      } else {
        return null;
      }
    }

  });
