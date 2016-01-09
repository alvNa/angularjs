(function() {
  'use strict';

  angular.module('myApp')
    .factory('contactService', [
      '$http', '$q',
      function($http, $q) {

        return {
          find: function() {
            return $http.get('/my-app/contact');
          }
        };
      }
    ]);
}());