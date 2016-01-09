'use strict';

module.exports = function(app) {

  app.route('/my-app/contact')
    //Find Orders
    .get(function(req, res) {
      var result = [{
        id: 1,
        name: 'Vincent Vega'
      }, {
        id: 2,
        name: 'Jules Winnfield fistro'
      }];
      res.json(result);
    });
};