(function() {
  'use strict';

  angular.module('myApp')
    .directive('ranking', ranking);

  ranking.$inject = [];

  function ranking() {
    return {
      restrict: 'E',
      templateUrl: 'html/directives/ranking.html',
      controller: function() {},
      controllerAs: 'vm',
      scope: {},
      bindToController: {
        ranking: '='
      }
    };
  }

}());