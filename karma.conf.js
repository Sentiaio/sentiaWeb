// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    'use strict';
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'assets/bower_components/jquery/dist/jquery.min.js',
            'assets/bower_components/angular/angular.min.js',
            'assets/bower_components/angular-mocks/angular-mocks.js',
            'assets/bower_components/angular-route/angular-route.min.js',
            'assets/bower_components/angular-sanitize/angular-sanitize.min.js',
            'assets/bower_components/angular-ui-utils/ui-utils.min.js',
            'assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'assets/bower_components/angular-animate/angular-animate.js',
            'assets/bower_components/angular-md5/angular-md5.js',
            'assets/js/socket.io.js',
            // then beef it up with some convenience logic for talking to Sails.js
            'assets/js/sails.io.js',
            // A simpler boilerplate library for getting you up and running w/ an
            // automatic listener for incoming messages from Socket.io.
            'assets/js/app.js',
            // All of the rest of your app scripts imported here
            'assets/js/controllers/*.js',
            'assets/js/directives/*.js',
            'assets/js/filters/*.js',
            'karma/mock/**/*.js',
            'karma/spec/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
