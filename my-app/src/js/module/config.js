(function() {
  'use strict';
  angular.module('myApp')
    .config([
      '$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'html/home.html',
            controller: 'MainController'
          })
          .state('home.contacts', {
            url: 'contacts',
            templateUrl: 'html/contacts.html'
          })
          .state('home.about', {
            url: 'about',
            templateUrl: 'html/about.html'
          });
      }
    ]);
}());