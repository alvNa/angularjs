(function() {
  'use strict';

  describe('ContactController', function() {
    var elm, element, $scope, ContactController;
    var isSuccessCallBack = true;
    var currentDate = moment();
    var contacts = [{
      id: 1,
      desc: 'contact1'
    }];
    var onRejectedDateValue = 'error date';
    var onRejectedContValue = 'error contact';

    var dateService = {
      getCurrentDate: jasmine.createSpy('dateService.getCurrentDate')
        .and.callFake(function() {
          return {
            then: function(successCallback, errorCallback) {
              if (isSuccessCallBack) {
                successCallback(currentDate);
              } else {
                errorCallback(onRejectedDateValue);
              }
            }
          };
        })
    };

    var contactService = {
      find: jasmine.createSpy('contactService.find')
        .and.callFake(function() {
          return {
            then: function(successCallback, errorCallback) {
              if (isSuccessCallBack) {
                successCallback({
                  data: contacts
                });
              } else {
                errorCallback(onRejectedContValue);
              }
            }
          };
        })
    };

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
      $scope = $rootScope.$new();

      ContactController = $controller('ContactController', {
        $scope: $scope,
        dateService: dateService,
        contactService: contactService
      });
      $httpBackend = _$httpBackend_;
    }));

    it('should invoke method getDate', function() {
      $scope.getDate();

      $scope.$apply();

      expect(dateService.getCurrentDate).toHaveBeenCalled();
      expect($scope.date.valueOf()).toEqual(currentDate.format('LLLL').valueOf());
    });

    it('should invoke method findContacts', function() {
      $scope.findContacts();

      $scope.$apply();

      expect(contactService.find).toHaveBeenCalled();
      expect($scope.contacts).toEqual(contacts);
    });
  });
}());