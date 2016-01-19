'use strict';

var gulp = require('gulp');

module.exports = function(gulp,config) {

//Sub-tasks
require('./gulp/server')(gulp,config);
require('./gulp/clean')(gulp,config);
require('./gulp/build')(gulp,config);
require('./gulp/test.js')(gulp,config);

  //Main tasks
  gulp.task('test', ['inject-test','karma-run']);
  gulp.task('ci', ['inject-test','karma-single-run']);
  gulp.task('serve', ['inject-src', 'server-run']);
  gulp.task('dist', ['uglify-js']);
};

gulp.task('default', []);