(function() {
  'use strict';

  angular.module('myApp')
    .factory('appDateService', appDateService);

  appDateService.$inject = ['$http', '$q'];

  /* @ngInject */
  function appDateService($http, $q) {
    return {
      getCurrentDate: function() {
        return $q(function(resolve) {
          resolve(moment().subtract(20, 'year'));
        });
      }
    };
  }

}());