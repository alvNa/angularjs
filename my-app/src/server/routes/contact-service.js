'use strict';
var _ = require('lodash');

module.exports = function(app) {

  var contacts = [{
    id: 1,
    name: 'Vincent Vega2'
  }, {
    id: 2,
    name: 'Jules Winnfield'
  }];

  app.route('/api/contacts')
    //Find contacts
    .get(function(req, res) {
      res.json(contacts);
    });

  app.route('/api/contacts/:id')
    .get(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No contact found');
      } else {
        res.json(_.find(contacts, function(contact) {
          return contact.id.toString() === req.params.id;
        }));
      }
    })
    .put(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No order found');
      } else {
        _.find(contacts, function(contact) {
          return contact.id.toString() === req.params.id;
        }) = req.body;

        res.status(200).end();
      }
    })
    .delete(function(req, res) {
      if (req.params.id < 0) {
        res.statusCode = 404;
        res.send('Error 404: No order found');
      } else {
        _.remove(contacts, function(contact) {
          return contact.id.toString() === req.params.id;
        });

        res.status(200).end();
      }
    });
};