'use strict';

/**
 * @ngdoc service
 * @name movieExplorerApp.movies
 * @description
 * # movies
 * Service in the movieExplorerApp.
 */

var TMDB_API_BASE = 'https://api.themoviedb.org/3/',
    TMDB_API_KEY = '?api_key=8dc046e0d14c9fa71508b92eeb2c3f11',
    TMDB_API_DETAILS = '&language=fr-Fr&include_adult=false';


angular.module('movieExplorerApp')
  .service('movies', function ($http, $filter, $q) {
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

    service.getMoviesByKeyword = function(query)
    {
      return $http.get(TMDB_API_BASE+'search/movie/'+TMDB_API_KEY+'&query='+query+TMDB_API_DETAILS).then(function(response)
      {
        return response.data.results;
      });
    };

   service.getDiscoverMoviesAPI = function()
    {
      var lastMonthDate = $filter('date')((new Date().getTime() - 2629746000), 'yyyy-MM-dd'); // month in milliseconds
      var todayDate = $filter('date')(new Date(), 'yyyy-MM-dd');
      return $http.get(TMDB_API_BASE+'discover/movie/'+TMDB_API_KEY+'&primary_release_date.gte='+lastMonthDate+'&primary_release_date.lte='+todayDate+'&sort_by=popularity.desc'+TMDB_API_DETAILS).then(function(response)
      {
        return response.data.results;
      });
    };


  });
