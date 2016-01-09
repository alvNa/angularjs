// constants.js

/* global toastr:false, moment:false */
(function() {
  'use strict';

  var prefix = '/my-app/';

  angular
    .module('myApp')
    .constant('URI', {
      CONTACT: prefix + 'contacts/:id',
      CONTACT_LIST: prefix + 'contacts'
    });
})();