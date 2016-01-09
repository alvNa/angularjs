(function() {
  'use strict';

  angular.module('myApp')
    .factory('contactService', contactService);

  contactService.$inject = ['$http', '$q'];

  /* @ngInject */
  function contactService($http, $q) {
    return {
      find: function() {
        return $http.get('/my-app/contact');
      }
    };
  }

}());