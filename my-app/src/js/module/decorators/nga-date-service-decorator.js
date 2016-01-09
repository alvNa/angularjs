(function() {
  'use strict';

  angular.module('myApp').decorator(
    'dateService', dateServiceDocorator);

  dateServiceDocorator.$inject = ['$delegate', 'appDateService'];

  /* @ngInject */
  function dateServiceDocorator($delegate, appDateService) {
    $delegate.getCurrentDate = appDateService.getCurrentDate;
    // Return the decorated service.
    return $delegate;
  }
}());