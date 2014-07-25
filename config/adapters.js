/**
 * Global adapter config
 *
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

    // If you leave the adapter config unspecified
    // in a model definition, 'default' will be used.
    'default': 'postgres',

    // Persistent adapter for DEVELOPMENT ONLY
    // (data is preserved when the server shuts down)
    disk: {
        module: 'sails-disk'
    },

    // postgres: {
    //     module: 'sails-postgresql',
    //     database: 'sentia',
    //     host: 'sentia.clto0ldvohgx.eu-west-1.rds.amazonaws.com',
    //     user: 'sentia',
    //     password: 'SmartShopSentia.io',
    //     port: 5432,
    //     pool: false,
    //     ssl: true,
    //     schema: true
    //     // url : "postgres://vcadzuwikgnphb:x4BfRBzjE1CJtRW1e36TDXX_id@ec2-54-83-201-54.compute-1.amazonaws.com:5432/d1u79je6c3rj70"
    // }
    postgres: {
        module: 'sails-postgresql',
        database: 'sentia',
        host: 'localhost',
        user: 'andreasmoller',
        password: '',
        port: 5432,
        pool: false,
        schema: true
        // url : "postgres://vcadzuwikgnphb:x4BfRBzjE1CJtRW1e36TDXX_id@ec2-54-83-201-54.compute-1.amazonaws.com:5432/d1u79je6c3rj70"
    }
};