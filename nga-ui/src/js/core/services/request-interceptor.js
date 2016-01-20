(function() {
  'use strict';

  angular.module('nga.core')
    .factory('requestInterceptor', requestInterceptor);

  requestInterceptor.$inject = ['$q'];

  /* @ngInject */
  function requestInterceptor($q) {
    return {
      request: request,
      requestError: requestError
    };

    function request(config) {
      console.log(rejection.status);
      return config;
    }

    function requestError(rejection) {
      console.log(rejection.status);
      return $q.reject(rejection);
    }
  }

}());