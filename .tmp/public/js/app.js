/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */
 /*jslint browser:true, nomen:true*/
 /*global app:true, $:true, console: false, angular : false */

(function () {
    'use strict';
    // create new angular module app
    var app = angular.module('app', [
            'ngRoute',
            'angular-md5',
            'ui.bootstrap',
            'ngSanitize',
            'ui.utils',
            'ngAnimate',
            'controllers'
        ]);
    // configure routes
    // Controllers are definedd in controllers.js
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'login-page',
                    controller: 'login'
                })
                .when('/dashboard', {
                    templateUrl : 'dashboard-page',
                    controller: 'dashboard'
                })
                .when('/cameras', {
                    templateUrl : 'cam-page',
                    controller: 'cam'
                })
                .otherwise({
                    redirectTo: '/login'
                });
        }
    ]);
    app.run(['$rootScope', function ($rootScope) {
        $rootScope.showHeader = false;
        $rootScope.user = {};
    }]);
    window.app = app;
})();

// init sockets
(function (io) {
    'use strict';
  // as soon as this file is loaded, connect automatically, 
    var socket = io.connect();
    // Simple log function to keep the example simple
    function log () {
        if (typeof console !== 'undefined') {
            console.log.apply(console, arguments);
        }
    }
    if (typeof console !== 'undefined') {
        log('Connecting to Sails.js...');
    }

    socket.on('connect', function socketConnected() {

        // Listen for Comet messages from Sails
        socket.on('message', function messageReceived(message) {

            ///////////////////////////////////////////////////////////
            // Replace the following with your own custom logic
            // to run when a new message arrives from the Sails.js
            // server.
            ///////////////////////////////////////////////////////////
            log('New comet message received :: ', message);
            //////////////////////////////////////////////////////

        });


        ///////////////////////////////////////////////////////////
        // Here's where you'll want to add any custom logic for
        // when the browser establishes its socket connection to 
        // the Sails.js server.
        ///////////////////////////////////////////////////////////
        log(
            'Socket is now connected and globally accessible as `socket`.\n' +
            'e.g. to send a GET request to Sails, try \n' +
            '`socket.get("/", function (response) ' +
            '{ console.log(response); })`'
        );
      ///////////////////////////////////////////////////////////


    });


    // Expose connected `socket` instance globally so that it's easy
    // to experiment with from the browser console while prototyping.
    window.socket = socket;

})(

    // In case you're wrapping socket.io to prevent pollution of the global namespace,
    // you can replace `window.io` with your own `io` here:
    window.io

);
