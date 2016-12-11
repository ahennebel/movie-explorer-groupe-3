'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('MainCtrl', function ($routeParams, movies) {
    var ctrl = this;

    ctrl.movies = [];

    // movies.getDiscoverMovies().then(function(result)
    // {
    //   ctrl.movies = result;
    // });

    movies.getDiscoverMoviesAPI().then(function(result)
    {
      ctrl.movies = result;
    });

    movies.getMovie($routeParams.movieId).then(function(result)
    {
      ctrl.doctor = result;
    });

    movies.getConfiguration().then(function(result){
      ctrl.configuration = result;
    });


    ctrl.getPosterURL = function(size)
    {
      if(ctrl.configuration)
      {
        return ctrl.configuration.images.secure_base_url + size + ctrl.doctor.poster_path;
      } else {
        return null;
      }
    }

    ctrl.getPosterAPI = function(path,size)
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
