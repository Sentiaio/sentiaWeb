// Start sails and pass it command line arguments
process.env.PORT=3000;
require('sails').lift(require('optimist').argv);
