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

    ctrl.movies = [];

    ctrl.inputIsVisible = false;

    movies.getConfiguration().then(function(result){
      ctrl.configuration = result;
    });

    movies.getMoviesByKeyword($routeParams.query).then(function(result){
      ctrl.movies = result;
    });

    ctrl.toggleInputVisibility = function(){
      ctrl.inputIsVisible = !ctrl.inputIsVisible;
    }

    ctrl.getMoviesQuery = function(){
      if($scope.moviesQuery){ 
        return "#/search/" + $scope.moviesQuery;
      }
    }

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
