'use strict';
var _ = require('lodash');
var URI = require('../constants.js');

module.exports = function(app) {

  var items = require('../data/items.json');

  app.route('/api/items')
    //Find items
    .get(function(req, res) {
      res.json(items);
    });

  app.route(URI.ITEM)
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