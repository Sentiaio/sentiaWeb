'use strict';
var Sails = require('sails');
before(function(done) {
  // Lift Sails and store the app reference
  Sails.lift({
    // turn down the log level so we can view the test results
    log: {
      level: 'error'
    },

    // send test database connections down if needed
    adapters: {
      'default': 'memory',
      memory: {
        module: 'sails-memory'
      }
    },
    sessions: {
      secret: '8d9e554c39679066a3298f0be8890b4b'
    }
  }, function() {
    done();
  });
});
after(function (done) {
  Sails.lower(function () {
    done();
  });
});