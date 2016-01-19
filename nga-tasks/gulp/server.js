'use strict';

var gulp = require('gulp');
var docco = require('gulp-docco');
var browserSync = require('browser-sync');
var server = require('gulp-express');
var listedInHelp = false;

module.exports = function(gulp, config) {

  // Generate documentation pages and save into `docs` directory.
  gulp.task('docs', listedInHelp, function() {
    return gulp.src([config.src + '/js/**/*.js'])
      // Docco generated files will be saved in the `docs` directory multiple files
      .pipe(docco())
      .pipe(gulp.dest(config.buildDir + 'docs'));
  });

  gulp.task('server-run', listedInHelp, function() {
    server.run([config.serverDir + '/app.js']);
 
    // Restart the server when file changes 
    gulp.watch([config.src + '/**/*.js'], browserSync.reload);
    gulp.watch([config.serverDir + '/**/*.js'],[server.run]);
  });

  gulp.task('server-stop', listedInHelp, function() {
    // Stop the server
    browserSync.exit();
  });

  return gulp;
};