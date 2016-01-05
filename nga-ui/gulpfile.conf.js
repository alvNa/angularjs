'use strict';

var tsjsmapjsSuffix = '.{ts,js.map,js}';

var bower = 'bower_components/';
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
    modulePrefix: 'nga',

    bootFile: src + 'index.html',
    bootjQuery: bower + 'jquery/dist/jquery.min.js',

    // The fonts we want Gulp to process
    fonts: [bower + 'fontawesome/fonts/*.*'],

    images: 'images/**/*.{gif,jpg,png}',

    // The scripts we want Gulp to process
    scripts: [
        // Bootstrapping
        src + 'app' + tsjsmapjsSuffix,
        src + 'config.route' + tsjsmapjsSuffix,

        // common Modules
        src + 'common/common' + tsjsmapjsSuffix,
        src + 'common/logger' + tsjsmapjsSuffix,
        src + 'common/spinner' + tsjsmapjsSuffix,

        // common.bootstrap Modules
        src + 'common/bootstrap/bootstrap.dialog' + tsjsmapjsSuffix,

        // directives
        src + 'directives/**/*' + tsjsmapjsSuffix,

        // services
        src + 'services/**/*' + tsjsmapjsSuffix,
    ],

    // The styles we want Gulp to process
    styles: [
        'content/styles.css'
    ]
};

config.debugFolder = config.buildDir + config.debug + '/';
config.releaseFolder = config.buildDir + config.release + '/';

config.templateFiles = [
    src + '**/*.html',
    '!' + config.bootFile // Exclude the launch page
];

module.exports = config;