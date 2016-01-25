(function() {
  'use strict';

  angular.module('myApp')
    .controller('MovieController', MovieController);

  MovieController.$inject = ['rankingService'];

  /* @ngInject */
  function MovieController(rankingService) {
    /* jshint validthis: true */
    var vm = this;
    vm.ids = [1,2];
    vm.selectRanking = selectRanking;

    function selectRanking(id){
      rankingService.get({ id: id }, function(data) {
        vm.ranking = data;
      });
    }
  }

}());