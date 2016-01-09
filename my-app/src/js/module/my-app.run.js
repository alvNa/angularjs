(function() {
  'use strict';
  angular.module('myApp')
    .run(run);

  run.$inject = ['$state'];

  /* @ngInject */
  function run($state) {
    //$state.transitionTo('home');
  }

}());