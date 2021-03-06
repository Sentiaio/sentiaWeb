/*jslint node:true, nomen:true*/
/**
 * Gruntfile
 *
 * If you created your Sails app with `sails new foo --linker`,
 * the following files will be automatically injected (in order)
 * into the EJS and HTML files in your `views` and `assets` folders.
 *
 * At the top part of this file, you'll find a few of the most commonly
 * configured options, but Sails' integration with Grunt is also fully
 * customizable.  If you'd like to work with your assets differently
 * you can change this file to do anything you like!
 *
 * More information on using Grunt to work with static assets:
 * http://gruntjs.com/configuring-tasks
 */
'use strict';
module.exports = function(grunt) {

    // Get path to core grunt dependencies from Sails
    var depsPath = grunt.option('gdsrc') || 'node_modules/sails/node_modules';
    grunt.loadTasks(depsPath + '/grunt-contrib-clean/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-copy/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-concat/tasks');
    grunt.loadTasks(depsPath + '/grunt-sails-linker/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-jst/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-watch/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-uglify/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-cssmin/tasks');
    grunt.loadTasks(depsPath + '/grunt-contrib-less/tasks');


    /**
     * CSS files to inject in order
     * (uses Grunt-style wildcard/glob/splat expressions)
     *
     * By default, Sails also supports LESS in development and production.
     * To use SASS/SCSS, Stylus, etc., edit the `sails-linker:devStyles` task
     * below for more options.  For this to work, you may need to install new
     * dependencies, e.g. `npm install grunt-contrib-sass`
     */
    var cssFilesToInject = [
        'linker/**/*.css'
    ];
    /**
     * Javascript files to inject in order
     * (uses Grunt-style wildcard/glob/splat expressions)
     *
     * To use client-side
     * eScript, TypeScript, etc., edit the
     * `sails-linker:devJs` task below for more options.
     */

    var jsFilesToInject = [

        // Below, as a demonstration, you'll see the built-in dependencies
        // linked in the proper order order

        // Bring in the socket.io client
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/d3/d3.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-touch/angular-touch.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/angular-ui-utils/ui-utils.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/angular-md5/angular-md5.js',
        'bower_components/angulartics/dist/angulartics.min.js',
        'bower_components/angulartics/dist/angulartics-mixpanel.min.js',
        'bower_components/moment/moment.js',
        'js/socket.io.js',

        // then beef it up with some convenience logic for talking to Sails.js
        'js/sails.io.js',

        // A simpler boilerplate library for getting you up and running w/ an
        // automatic listener for incoming messages from Socket.io.
        'js/app.js',

        // *->    put other dependencies here   <-*

        // All of the rest of your app scripts imported here
        'js/services/*.js',
        'js/controllers/*.js',
        'js/directives/*.js',
        'js/filters/*.js'
    ];

    /**
     * Client-side HTML templates are injected using the sources below
     * The ordering of these templates shouldn't matter.
     * (uses Grunt-style wildcard/glob/splat expressions)
     *
     * By default, Sails uses JST templates and precompiles them into
     * functions for you.  If you want to use jade, handlebars, dust, etc.,
     * edit the relevant sections below.
     */

    var templateFilesToInject = [
        '**/*.html'
    ];


    // Modify css file injection paths to use
    cssFilesToInject = cssFilesToInject.map(function(path) {
        return '.tmp/public/' + path;
    });

    // Modify js file injection paths to use
    jsFilesToInject = jsFilesToInject.map(function(path) {
        return '.tmp/public/' + path;
    });


    templateFilesToInject = templateFilesToInject.map(function(path) {
        return 'assets/' + path;
    });

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: './assets',
                    src: ['**/*'],
                    dest: '.tmp/public'
                }]
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '.tmp/public',
                    src: ['**/*'],
                    dest: 'www'
                }]
            }
        },

        clean: {
            dev: ['.tmp/public/**'],
            build: ['www']
        },

        jst: {
            dev: {

                files: {
                    '.tmp/public/jst.js': templateFilesToInject
                }
            }
        },

        less: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles/',
                    src: ['*.less'],
                    dest: '.tmp/public/styles/',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'assets/linker/styles/',
                    src: ['*.less'],
                    dest: '.tmp/public/linker/styles/',
                    ext: '.css'
                }]
            }
        },

        concat: {
            js: {
                src: jsFilesToInject,
                dest: '.tmp/public/concat/production.js'
            },
            css: {
                src: cssFilesToInject,
                dest: '.tmp/public/concat/production.css'
            }
        },

        uglify: {
            options : {
                mangle: false
            },
            dist: {
                src: ['.tmp/public/concat/production.js'],
                dest: '.tmp/public/min/production.js'
            }
        },

        cssmin: {
            dist: {
                src: ['.tmp/public/concat/production.css'],
                dest: '.tmp/public/min/production.css'
            }
        },

        'sails-linker': {
            devJs: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script src="%s"></script>',
                    appRoot: '.tmp/public'
                },
                files: {
                    '.tmp/public/**/*.html': jsFilesToInject,
                    'views/**/*.html': jsFilesToInject,
                    'views/**/*.ejs': jsFilesToInject
                }
            },

            prodJs: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script src="%s"></script>',
                    appRoot: '.tmp/public'
                },
                files: {
                    '.tmp/public/**/*.html': ['.tmp/public/min/production.js'],
                    'views/**/*.html': ['.tmp/public/min/production.js'],
                    'views/**/*.ejs': ['.tmp/public/min/production.js']
                }
            },

            devStyles: {
                options: {
                    startTag: '<!--STYLES-->',
                    endTag: '<!--STYLES END-->',
                    fileTmpl: '<link rel="stylesheet" href="%s">',
                    appRoot: '.tmp/public'
                },

                // cssFilesToInject defined up top
                files: {
                    '.tmp/public/**/*.html': cssFilesToInject,
                    'views/**/*.html': cssFilesToInject,
                    'views/**/*.ejs': cssFilesToInject
                }
            },

            prodStyles: {
                options: {
                    startTag: '<!--STYLES-->',
                    endTag: '<!--STYLES END-->',
                    fileTmpl: '<link rel="stylesheet" href="%s">',
                    appRoot: '.tmp/public'
                },
                files: {
                    '.tmp/public/index.html': ['.tmp/public/min/production.css'],
                    'views/**/*.html': ['.tmp/public/min/production.css'],
                    'views/**/*.ejs': ['.tmp/public/min/production.css']
                }
            },

            // Bring in JST template object
            devTpl: {
                options: {
                    startTag: '<!--TEMPLATES-->',
                    endTag: '<!--TEMPLATES END-->',
                    fileTmpl: '<script type="text/javascript" src="%s"></script>',
                    appRoot: '.tmp/public'
                },
                files: {
                    '.tmp/public/index.html': ['.tmp/public/jst.js'],
                    'views/**/*.html': ['.tmp/public/jst.js'],
                    'views/**/*.ejs': ['.tmp/public/jst.js']
                }
            }
        },

        watch: {
            assets: {

                // Assets to watch:
                files: ['assets/**/*'],

                // When assets are changed:
                tasks: ['compileAssets'],
                options: {
                    livereload: true
                }
            }

        },
        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        shell: {
            pm2: {
                command: [
                    'pm2 dump',
                    'pm2 kill',
                    'pm2 start app.js --name sentia'
                ].join('&&')
            }
        },
        mochaTest: {
            server: {
                options: {
                    reporter: 'spec',
                    timeout: 4000
                },
                src: [
                    'test/api/**/*.js',
                    'test/unit/**/*.js'
                ]
            }
        },
        jshint: {
            options: {
                jshintrc: true, // use .jshintrc in project root
                reporter: require('jshint-stylish') // pretty output
            },
            server: ['api/**/*.js'],
            frontend: [
                'assets/js/app/**/*.js',
                'assets/js/app/*.js'
            ]
        },
        docco: {
            frontend: {
                src: ['assets/js/**/*.js'],
                options: {
                    output: 'documentation/frontend/'
                }
            },
            server: {
                src: [
                    'api/models/*.js',
                    'api/policies/*.js',
                    'api/services/*.js'
                ],
                options: {
                    output: 'documentation/server/'
                }
            }
        }
    });

    // When Sails is lifted:
    grunt.registerTask('default', [
        'compileAssets',
        'linkAssets',
        'watch'
    ]);

    grunt.registerTask('test', [
        'karma:unit',
        'mochaTest:server'
    ]);

    grunt.registerTask('compileAssets', [
        'clean:dev',
        'jst:dev',
        'less:dev',
        'copy:dev',
    ]);

    grunt.registerTask('linkAssets', [

        // Update link/script/template references in `assets` index.html
        'sails-linker:devJs',
        'sails-linker:devStyles',
        'sails-linker:devTpl'
    ]);


    // Build the assets into a web accessible folder.
    // (handy for phone gap apps, chrome extensions, etc.)
    grunt.registerTask('build', [
        'compileAssets',
        'linkAssets',
        'clean:build',
        'copy:build'
    ]);
    // When sails is lifted in production
    grunt.registerTask('prod', [
        'clean:dev',
        'jst:dev',
        'less:dev',
        'copy:dev',
        'concat',
        'uglify',
        'cssmin',
        'sails-linker:prodJs',
        'sails-linker:prodStyles',
        'sails-linker:devTpl'
    ]);
    grunt.registerTask('deploy', [
        // 'prod',
        'test',
        'shell:pm2'

    ]);
    grunt.loadNpmTasks('grunt-ssh');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-mocha-test');


    // When API files are changed:
    // grunt.event.on('watch', function(action, filepath) {
    //   grunt.log.writeln(filepath + ' has ' + action);

    //   // Send a request to a development-only endpoint on the server
    //   // which will reuptake the file that was changed.
    //   var baseurl = grunt.option('baseurl');
    //   var gruntSignalRoute = grunt.option('signalpath');
    //   var url = baseurl + gruntSignalRoute + '?action=' + action + '&filepath=' + filepath;

    //   require('http').get(url)
    //   .on('error', function(e) {
    //     console.error(filepath + ' has ' + action + ', but could not signal the Sails.js server: ' + e.message);
    //   });
    // });
};