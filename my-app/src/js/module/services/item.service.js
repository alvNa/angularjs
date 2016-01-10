(function() {
  'use strict';

  angular.module('myApp')
    .factory('itemService', itemService);

  itemService.$inject = ['$resource', 'URI'];

  /* @ngInject */
  function itemService($resource, URI) {
    return $resource(URI.ITEM);
  }

}());