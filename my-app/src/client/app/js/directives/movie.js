(function() {
  'use strict';

  angular.module('myApp')
    .directive('movie', movie);

  movie.$inject = [];

  function movie() {
    return {
      restrict: 'E',
      templateUrl: 'html/directives/movie.html',
      controller: function() {
        //var vm = this;
      },
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        movie: '='
      }
    };
  }

}());