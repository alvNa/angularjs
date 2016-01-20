(function() {
  'use strict';
  angular.module('nga.core')
    .run(run);

  run.$inject = ['$rootScope'];

  /* @ngInject */
  function run($rootScope) {
    $rootScope.status200Cnt = 0;

    $rootScope.$on('status:200',function(){
      $rootScope.status200Cnt++;
    });
  }
}());

