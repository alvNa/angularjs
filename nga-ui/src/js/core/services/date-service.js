(function() {
  'use strict';

  angular.module('nga.core')
    .factory('dateService', dateService);

  dateService.$inject = ['$http', '$q'];

  /* @ngInject */
  function dateService($http, $q) {

    return {
      getCurrentDate: function() {
        return $q(function(resolve) {
          resolve(moment());
        });
      }
    };
  }

}());