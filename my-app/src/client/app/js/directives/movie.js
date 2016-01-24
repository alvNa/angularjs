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
        var vm = this;
        /*vm.index = '1';
        vm.score = '7.5';
        vm.actors = [{
          name: 'Samuel',
          surname: 'L. Jackson'
        }, {
          name: 'Harvey',
          surname: 'Keitel'
        }];*/
      },
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        movie: '='
      }
    };
  }

}());