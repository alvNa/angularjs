(function() {
  'use strict';

  describe('DateService Tests', function() {
    var $scope;
    var appDateService;
    var contacts = [{
      id: 1,
      desc: 'contact1'
    }];

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, _appDateService_) {
      $scope = $rootScope.$new();
      appDateService = _appDateService_;

      jasmine.clock().install();
    }));

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('Should get valid date', function() {
      var baseTime = moment();
      var result;

      jasmine.clock().mockDate(baseTime.toDate());

      appDateService.getCurrentDate().then(function(res){
        result = res;
      });
      
      $scope.$apply();
      jasmine.clock().tick(50);

      expect(result.add(20, 'year').valueOf()).toEqual(baseTime.valueOf());

      //expect(result).toBe(true);
    });

  });

}());
