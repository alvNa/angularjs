(function() {
  'use strict';

  angular.module('nga.core')
    .factory('responseInterceptor', responseInterceptor);
  
  responseInterceptor.$inject = ['$q','$rootScope'];

  /* @ngInject */
  function responseInterceptor($q,$rootScope) {
    return {
      response: response,
      responseError: responseError
    };

    function response(response) {
      $rootScope.$emit('status:'+ response.status, response);
      return response;
    }

    function responseError(rejection) {
      console.log(rejection.status);
      return $q.reject(rejection);
    }
  }

}());