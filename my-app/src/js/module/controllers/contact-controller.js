(function() {
  'use strict';

  angular.module('myApp')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['dateService', 'contactService'];

  /* @ngInject */
  function ContactController(dateService, contactService) {
    /* jshint validthis: true */
    var vm = this;

    vm.date;
    vm.contacts;
    vm.getDate = getDate;
    vm.findContacts= findContacts;

    function getDate() {
      dateService.getCurrentDate().then(function(data) {
        vm.date = data.format('LLLL');
      });
    }

    function findContacts() {
      contactService.find().then(function(res) {
        vm.contacts = res.data;
      });
    }
  }
}());