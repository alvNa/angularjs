(function() {
  'use strict';

  angular.module('myApp')
    .factory('rankingService', rankingService);

  rankingService.$inject = ['$resource', 'URI'];

  /* @ngInject */
  function rankingService($resource, URI) {
    return $resource(URI.RANKING);
  }

}());