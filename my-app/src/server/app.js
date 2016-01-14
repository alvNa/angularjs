'use strict';

var express = require('express');
var browserSync = require('browser-sync');
var fs = require('fs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var config = require('../../gulpfile.conf.js');
var port = process.env.PORT || config.port;
var hasStarted = false;

app.use(express.static(config.srcDir));
app.use(config.bower, express.static(config.bowerDir));

loadRoutes(__dirname + '/routes', app);
run();

//Load all files in serverDir directory
function loadRoutes(serverDir, app) {
  fs.readdirSync(serverDir).forEach(function(file) {
    if (path.extname(file) === '.js') {
      require(serverDir + '/' + file)(app);
    }
  });
}

function listening() {
  browserSync({
    port: port,
    proxy: 'localhost:' + port,
    files: ['src/client/**/*.*'],
  });
}

function run() {
  if (!hasStarted) {
    app.listen(port, listening);
    hasStarted = true;
  }
}
