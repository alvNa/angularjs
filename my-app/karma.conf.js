'use strict';
// Karma configuration
// Generated on Fri Jan 01 2016 22:31:20 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/moment/moment.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/nga-ui/build/dist/nga-ui.min.js',
      'bower_components/nga-ui/build/dist/nga-ui-templates.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      
      // inject:js
      'src/client/app/js/my-app.module.js',
      'src/client/app/js/services/item.service.js',
      'src/client/app/js/services/contact.service.js',
      'src/client/app/js/services/app-date.service.js',
      'src/client/app/js/decorators/nga-date-service.decorator.js',
      'src/client/app/js/controllers/contact.controller.js',
      'src/client/app/js/my-app.run.js',
      'src/client/app/js/my-app.constant.js',
      'src/client/app/js/my-app.config.js',
      // endinject
      
      // our app
      //'src/js/**/module.js',
      //'src/js/**/!(module.js)*.js',

      // tests
      'src/client/test/**/*.spec.js'

      // templates
      //'src/html/**/*.html'
    ],


    // list of files to exclude
    exclude: [
      '**/*.svn',
      '**/*.git',
      'src/client/app/js/**/*.config.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for 
      // do not include tests or libraries 
      // (these files will be instrumented by Istanbul) 
      'src/client/app/**/*.js': ['coverage'],
      'src/client/app/html/**/*.html': 'ng-html2js'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter 
    coverageReporter: {
      //type : 'html',
      //dir : 'coverage/'
      // specify a common output directory 
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property 
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly 
        // output them in the `dir` directory 
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
