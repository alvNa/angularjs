'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var Server = require('karma').Server;
var listedInHelp = false;

module.exports = function(gulp,config) {
  /**
   * Run test once and exit
   */
  gulp.task('karma-run', listedInHelp, function(done) {
    new Server({
      configFile: config.baseDir + '/' + config.karmaConf,
      singleRun: false
    }, function(exitCode) {
      done();
      process.exit(exitCode);
    }).start();
  });

  /**
   * Watch for file changes and re-run tests on each change
   */
  gulp.task('karma-single-run', listedInHelp, function(done) {
    new Server({
      configFile: config.baseDir + '/' + config.karmaConf,
      singleRun: true
    }, function(exitCode) {
      done();
      process.exit(exitCode);
    }).start();
  });
};