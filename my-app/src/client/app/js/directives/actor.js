(function() {
  'use strict';

  angular.module('myApp')
    .directive('actor', actor);

  actor.$inject = [];

  function actor() {
    return {
      restrict: 'E',
      templateUrl: 'html/directives/actor.html',
      controller: function() {
      },
      controllerAs: 'vm',
      scope: {},
      bindToController: {
        name: '=',
        surname: '='
      }
    };
  }

}());