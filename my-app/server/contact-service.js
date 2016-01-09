'use strict';

module.exports = function(app) {

  app.route('/my-app/contacts')
    //Find contacts
    .get(function(req, res) {
      var result = [{
        id: 1,
        name: 'Vincent Vega'
      }, {
        id: 2,
        name: 'Jules Winnfield'
      }];
      res.json(result);
    });
};