(function() {
  'use strict';

  angular.module('myApp')
    .factory('contactService', contactService);

  contactService.$inject = ['$http', '$q', 'URI'];

  /* @ngInject */
  function contactService($http, $q, URI) {
    return {
      find: function() {
        return $http.get(URI.CONTACT_LIST);
      }
    };
  }

}());