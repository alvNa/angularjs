'use strict';

var src = 'src/';
var packageJson = require('./package.json');

var config = {
    base: '.',
    baseDir: __dirname,
    buildDir: './build/',
    bower: '/bower_components',
    bowerDir: __dirname + '/bower_components',
    src: src,
    srcDir: __dirname + '/src',

    debug: 'debug',
    release: 'release',
    css: 'css',
    karmaConf: 'karma.conf.js',
    dist: 'build/dist',
    appName: packageJson.name,
    modulePrefix: 'my-app',
    server: 'server',
    port: 9000,

    bootFile: src + 'index.html'
};

module.exports = config;