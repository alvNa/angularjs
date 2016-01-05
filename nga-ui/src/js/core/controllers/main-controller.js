(function() {
  'use strict';

  angular.module('nga.core')
    .controller('MainController', ['$scope', 'dateService',
      function($scope, dateService) {

        $scope.phones = [{
          'name': 'Nexus S',
          'snippet': 'Fast just got faster with Nexus S.'
        }, {
          'name': 'Motorola XOOM™ with Wi-Fi',
          'snippet': 'The Next, Next Generation tablet.'
        }, {
          'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.'
        }];

        $scope.getDate = function() {
          dateService.getCurrentDate().then(function(data) {
            $scope.date = data;
          });
        }
      }
    ]);
}());