'use strict';

var gulp = require('gulp');
var docco = require('gulp-docco');
var browserSync = require('browser-sync');
var server = require('gulp-express');
var taskListing = require('gulp-task-listing')();

module.exports = function(gulp, config) {

  /**
   * List the available gulp tasks
   */
  gulp.task('help', taskListing);

  // Generate documentation pages and save into `docs` directory.
  gulp.task('docs', function() {
    return gulp.src([config.src + '/js/**/*.js'])
      // Docco generated files will be saved in the `docs` directory multiple files
      .pipe(docco())
      .pipe(gulp.dest(config.buildDir + 'docs'));
  });

  gulp.task('server-run', function() {
    server.run([config.serverDir + '/app.js']);
 
    // Restart the server when file changes 
    gulp.watch([config.src + '/**/*.js'], browserSync.reload);
    gulp.watch([config.serverDir + '/**/*.js'],[server.run]);
  });

  gulp.task('server-stop', function() {
    // Stop the server
    browserSync.exit();
  });

  return gulp;
};