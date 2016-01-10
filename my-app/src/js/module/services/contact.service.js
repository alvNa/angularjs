(function() {
  'use strict';

  angular.module('myApp')
    .factory('contactService', contactService);

  contactService.$inject = ['$http', 'URI'];

  /* @ngInject */
  function contactService($http, URI) {
    return {
      find: function() {
        return $http.get(URI.CONTACT_LIST);
      }
    };
  }

}());