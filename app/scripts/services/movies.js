'use strict';

/**
 * @ngdoc service
 * @name movieExplorerApp.movies
 * @description
 * # movies
 * Service in the movieExplorerApp.
 */

var TMDB_API_KEY = '?api_key=8dc046e0d14c9fa71508b92eeb2c3f11';
 
angular.module('movieExplorerApp')
  .service('movies', function ($http,$q) {
    var service = this;

    service.getDiscoverMovies = function()
    {
      return $http.get('/datas/discover.json').then(function(response)
      {
        return response.data.results;
      });
    };

    service.getConfiguration = function()
    {
      //on sauvegarde en mémoire le résultat
      if(!service.configurationPromise)
      {
        service.configurationPromise = $http.get('/datas/configuration.json').then(function(response)
        {
          service.configuration = response.data;
          return response.data;
        });
      }
      return service.configurationPromise;
    };

    service.getMovie = function(movieId)
    {
      //pour l'instant movieId ne sert à rien car ce sont des fausses données
      return $http.get('/datas/movie.json').then(function(response)
      {
        return response.data;
      });
    };

  });
