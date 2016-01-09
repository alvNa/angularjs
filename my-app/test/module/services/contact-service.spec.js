(function() {
  'use strict';

  describe('ContactService Tests', function() {
    var $httpBackend;
    var contactService;
    var contacts = [{
      id: 1,
      desc: 'contact1'
    }];

    beforeEach(module('myApp'));

    beforeEach(inject(function(_$httpBackend_, _contactService_) {
      $httpBackend = _$httpBackend_;
      contactService = _contactService_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should get valid contact', function() {
      var result;
      $httpBackend.expectGET('/my-app/contact').respond(200, contacts);

      contactService.find().then(function(res) {
        result = res.data;
      });

      $httpBackend.flush();

      expect(result).toEqual(contacts);
    });

  });

}());