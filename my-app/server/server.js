'use strict';

var express = require('express');
var browserSync = require('browser-sync');
var fs = require('fs');
var path = require('path');

module.exports = function(config) {
  var app = express();
  var port = process.env.PORT || config.port;
  var hasStarted = false;
  
  var result = {
    run: run,
    stop: stop,
    getApp: app,
    reload: reload
  };

  app.use(express.static(config.srcDir));
  app.use(config.bower, express.static(config.bowerDir));

  loadRoutes('routes', app);

  //Load all files in route directory
  function loadRoutes(routesDirName, app) {
    var normalizedPath = path.join(__dirname, routesDirName);

    fs.readdirSync(normalizedPath).forEach(function(file) {
      require('./' + routesDirName + '/' + file)(app);
    });
  }

  function listening() {
    browserSync({
      port: port,
      proxy: 'localhost:' + port,
      files: ['src/**/*.*']
    });
  }

  function run() {
    if (!hasStarted) {
      app.listen(port, listening);
      hasStarted = true;
    }
  }

  function reload(){
    loadRoutes('routes', app);
    //app.notify();
    browserSync.reload();
  }

  function stop(){
    browserSync.exit();
    //express.close();
  }

  return result;
};