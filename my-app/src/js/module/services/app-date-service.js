(function() {
  'use strict';

  angular.module('myApp')
    .factory('appDateService', [
      '$http', '$q',
      function($http, $q) {

        return {
          getCurrentDate: function() {
            return $q(function(resolve){
              resolve(moment().subtract(20, 'year'));
            });
          }
        };
      }
    ]);
}());