(function() {
  'use strict';
  angular.module('nga.core')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('requestInterceptor');
    $httpProvider.interceptors.push('responseInterceptor');
    
    /*
    $stateProvider
    .state('home', {
        url: '',
        templateUrl: 'html/home.html',
        controller: 'MainController'
      });*/
  }
}());