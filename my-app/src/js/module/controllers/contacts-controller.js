(function() {
  'use strict';

  angular.module('myApp')
    .controller('ContactsController', ['$scope', 'dateService','contactService',
      function($scope, dateService, contactService) {

        $scope.getDate = function() {
          dateService.getCurrentDate().then(function(data) {
            $scope.date = data.format('LLLL');
          });
        }

        $scope.getContacts = function() {
          contactService.find().then(function(res) {
            $scope.contacts = res.data;
          });
        }
      }
    ]);
}());