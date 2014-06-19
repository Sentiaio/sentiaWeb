/**
 * Map
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
var objectId = require('mongodb').ObjectID,
    moment = require('moment');
/**
 * Map
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,

    attributes: {
        x: {
            type: 'integer',
            required: true
        },
        y: {
            type: 'integer',
            required: true
        },
        dx: {
            type: 'float',
            required: true
        },
        dy: {
            type: 'float',
            required: true
        },
        heat: {
            type: 'float',
            required: true
        },
        cam: {
            type: 'integer',
            required: true
        },
        company: {
            type: 'integer',
            required: true
        },
        store: {
            type: 'integer',
            required: true
        },
        time: {
            type: "datetime",
            required: true

        }

        /* e.g.
  	nickname: 'string'
  	*/

    }

};
