'use strict';
var _ = require('lodash');

module.exports = function(app) {

  var items = [{
    id: 1,
    name: 'Coca-cola'
  }, {
    id: 2,
    name: 'Pepsi-cola'
  }, {
    id: 3,
    name: 'Aquarius'
  }];

  app.route('/api/items')
    //Find items
    .get(function(req, res) {
      res.json(items);
    });

  app.route('/api/items/:id')
    .get(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No contact found');
      } else {
        res.json(_.find(items, function(item) {
          return item.id.toString() === req.params.id;
        }));
      }
    })
    .put(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No order found');
      } else {
        _.find(items, function(item) {
          return item.id.toString() === req.params.id;
        }) = req.body;

        res.status(200).end();
      }
    })
    .delete(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No order found');
      } else {
        _.remove(items, function(item) {
          return item.id.toString() === req.params.id;
        });

        res.status(200).end();
      }
    });
};