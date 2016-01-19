'use strict';

//var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var htmlhint = require('gulp-htmlhint');
var jscs = require('gulp-jscs');
var listedInHelp = false;

module.exports = function(gulp, config) {

  gulp.task('jshint', listedInHelp, function() {
    return gulp.src(['*.js', config.src + '/**/*.js', config.test + '/**/*.js'])
      .pipe(jshint(__dirname + '/../data/.jshintrc'))
      .pipe(jshint.reporter(stylish));
  });

  gulp.task('jscs', listedInHelp, function() {
    return gulp.src(['*.js', config.src + '/**/*.js'])
      .pipe(jscs({configPath: __dirname + '/../data/.jscsrc'}))
      .pipe(jscs.reporter());
  });

  gulp.task('htmlhint', listedInHelp, function() {
    return gulp.src([config.src + '/index.html',
        config.src + '/html/**/*.html'
      ])
      .pipe(htmlhint({htmlhintrc: __dirname + '/../data/.htmlhint'}))
      .pipe(htmlhint.reporter());
  });
};
