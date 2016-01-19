'use strict';

var gulp = require('gulp');
var config = require("./gulpfile.conf.js");
require('nga-tasks')(gulp,config);

gulp.task('default', ['ci']);