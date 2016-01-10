(function() {
    'use strict';
    //Initialise templates module
    angular.module('nga.templates', []);

    angular.module('nga.core', [
      'nga.templates',
      'ui.router',
      'ngResource'
    ]);
}());