(function() {
  'use strict';

  angular.module('myApp')
    .factory('dateService', [
      '$http', '$q',
      function($http, $q) {

        return {
          getCurrentDate: function() {
            return $q(function(resolve){
              resolve(moment());
            });
          }
        };
      }
    ]);
}());