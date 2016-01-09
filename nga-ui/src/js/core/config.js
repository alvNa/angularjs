(function() {
  'use strict';
  angular.module('nga.core')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    /*
    $stateProvider
    .state('home', {
        url: '',
        templateUrl: 'html/home.html',
        controller: 'MainController'
      });*/
  }
}());