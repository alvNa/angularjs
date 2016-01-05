(function() {
  'use strict';

  angular.module('myApp').decorator(
    'dateService', ['$delegate', 'appDateService',

      function dateServiceDocorator($delegate, appDateService) {
        $delegate.getCurrentDate = appDateService.getCurrentDate;
        // Return the decorated service.
        return $delegate;
      }
    ]);
}());