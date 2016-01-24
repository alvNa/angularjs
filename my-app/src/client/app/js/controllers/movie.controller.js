(function() {
  'use strict';

  angular.module('myApp')
    .controller('MovieController', MovieController);

  MovieController.$inject = [];

  /* @ngInject */
  function MovieController() {
    /* jshint validthis: true */
    var vm = this;
    vm.ranking = {
      title: 'My favourite movies',
      movies: [{
        index: 1,
        title: 'The the hateful eight',
        score: 7.5,
        actors: [{
          name: 'Samuel',
          surname: 'L. Jackson'
        }, {
          name: 'Tim',
          surname: 'Roth'
        }]
      }, {
        index: 2,
        title: 'Inglorious bastards',
        score: 7.2,
        actors: [{
          name: 'Brad',
          surname: 'Pitt'
        }, {
          name: 'Christoph',
          surname: 'Waltz'
        }]
      }, {
        index: 3,
        title: 'Pulp fiction',
        score: 7.1,
        actors: [{
          name: 'Samuel',
          surname: 'L. Jackson'
        }, {
          name: 'Harvey',
          surname: 'Keitel'
        }]
      }]
    };
  }

}());