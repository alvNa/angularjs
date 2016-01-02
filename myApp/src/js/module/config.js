(function() {
    'use strict';
    angular.module('myApp')
    .run([
      '$http', '$q',
      function($http, $q) {
      
        $http.get('/someUrl').then(function(){
          
        });
    }]);
}());