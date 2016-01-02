'use strict';

var gulp = require('gulp');
// Get our config
var config = require("./gulpfile.conf.js");
require('mod-clean')(gulp,config);
require('mod-build')(gulp,config);
require('mod-server')(gulp,config);
require('mod-test')(gulp,config);

gulp.task('test', ['pre-test','karma-run']);
gulp.task('ci', ['pre-test','karma-single-run']);
gulp.task('serve', ['inject', 'browser-sync']);

gulp.task('default', ['ci','inject']);