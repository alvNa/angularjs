(function() {
  'use strict';

  angular.module('myApp')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['dateService', 'contactService', 'itemService'];

  /* @ngInject */
  function ContactController(dateService, contactService , itemService) {
    /* jshint validthis: true */
    var vm = this;

    vm.date;
    vm.contacts;
    vm.items;
    vm.getDate = getDate;
    vm.findContacts= findContacts;
    vm.findItems= findItems;
    vm.getItem= getItem;

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

    function findItems() {
      itemService.query(function(data) {
        vm.items = data;
      });
    }

    function getItem(id) {
      itemService.get({ id: id }, function(data) {
        vm.item = data;
      },function(reason){
        console.warn(reason);
      });
    }
  }
}());