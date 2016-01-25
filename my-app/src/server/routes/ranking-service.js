'use strict';
var _ = require('lodash');
var URI = require('../constants.js');

module.exports = function(app) {

  var rankings = require('../data/rankings.json');

  app.route('/api/rankings')
    //Find items
    .get(function(req, res) {
      res.json(rankings);
    });

  app.route(URI.RANKING)
    .get(function(req, res) {
      console.log(req.params.id);
      console.log(rankings);

      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No contact found');
      } else {
        res.json(_.find(rankings, function(ranking) {
          console.log(ranking);
          return ranking.id.toString() === req.params.id;
        }));
      }
    })
    .put(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No order found');
      } else {
        _.find(rankings, function(ranking) {
          return ranking.id.toString() === req.params.id;
        }) = req.body;

        res.status(200).end();
      }
    })
    .delete(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No order found');
      } else {
        _.remove(rankings, function(ranking) {
          return ranking.id.toString() === req.params.id;
        });

        res.status(200).end();
      }
    });
};