// constants.js

/* global toastr:false, moment:false */
(function() {
  'use strict';

  var prefix = '/api/';

  angular
    .module('myApp')
    .constant('URI', {
      CONTACT: prefix + 'contacts/:id',
      CONTACT_LIST: prefix + 'contacts',
      ITEM: prefix + 'items/:id'
    });
})();