'use strict';

var gulp = require('gulp');

module.exports = function(gulp, config) {

  //Sub-tasks
  require('gulp-help')(gulp);
  require('./gulp/server')(gulp, config);
  require('./gulp/clean')(gulp, config);
  require('./gulp/ci')(gulp, config);
  require('./gulp/build')(gulp, config);
  require('./gulp/test.js')(gulp, config);

  //Main tasks
  gulp.task('test', 'Executes unit tests with karma',
    ['inject-test', 'karma-single-run']);
  gulp.task('ci', 'Continuous integration, hint code and test.',
    ['jshint', 'jscs', 'htmlhint', 'inject-test', 'karma-single-run']);
  gulp.task('serve', 'Inject dependencies in the bootstrap file and run a local server',
    ['inject-src', 'server-run']);
  gulp.task('dist', 'Generate dist directory with minified code',
    ['uglify-js', 'ng-template-cache']);
};

require('./gulp/ci')(gulp, {
  src: 'gulp/'
});
gulp.task('ci', ['jshint', 'jscs']);
gulp.task('default', []);
