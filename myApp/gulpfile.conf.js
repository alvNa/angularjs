'use strict';

var src = 'src/';
var packageJson = require('./package.json');

var config = {
    src: src, 
    base: '.',
    buildDir: './build/',
    debug: 'debug',
    release: 'release',
    css: 'css',
    karmaConf: 'karma.conf.js',
    baseDir: __dirname,
    dist: 'build/dist',
    appName: packageJson.name,

    bootFile: src + 'index.html'
};

module.exports = config;