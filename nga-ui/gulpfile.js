'use strict';

var gulp = require('gulp');
// Get our config
var config = require("./gulpfile.conf.js");
require('mod-clean')(gulp,config);
require('mod-build')(gulp,config);
require('mod-server')(gulp,config);
require('mod-test')(gulp,config);

gulp.task('test', ['inject-test','karma-run']);
gulp.task('ci', ['inject-test','karma-single-run']);
gulp.task('dist', ['uglify-js','ng-template-cache']);

gulp.task('default', ['ci']);