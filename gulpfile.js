 /**
  * Gulpfile for adstream A5 public API
  */

'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-spawn-mocha'),
    karma = require('gulp-karma'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function () {
    return gulp.src([
        'bin/**/*.js',
        'config/**/*.js',
        'lib/*.js',
        'middleware/**/*.js',
        'model/**/*.js',
        'routes/**/*.js',
        'transformers/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(require('jshint-stylish')));
});

// Run mocha agains all files in the test folder using the mocha-jenkins-reporter
gulp.task('karma', function () {
    gulp.src('test/karma/**/*.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});


gulp.task('mocha', function () {
    gulp.src('test/api')
        .pipe(mocha({
            reporter : 'spec'
        }));
});

// taks to be run before commit to the repository
// Run the test suite followed by jshint
gulp.task('validate', ['jshint', 'mocha']);

