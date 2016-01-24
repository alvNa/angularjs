(function() {
  'use strict';

  angular.module('myApp')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'html/home.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('home.contacts', {
        url: 'contacts',
        templateUrl: 'html/contacts.html'
      })
      .state('home.movies', {
        url: 'movies',
        templateUrl: 'html/movies.html'
      })
      .state('home.about', {
        url: 'about',
        templateUrl: 'html/about.html'
      });
  }

}());