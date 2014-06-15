/**
 * Flow
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */
'use strict';
var objectId = require('mongodb').ObjectID,
    moment = require('moment');
module.exports = {
    attributes: {
        cam: {
            type: 'integer',
            required: true
        },
        store: {
            type: 'integer',
            required: true
        },
        company: {
            type: 'integer',
            required: true
        },
        time: {
            type: 'INTEGER',
            required: true
        },
        /* e.g.
    nickname: 'string'
    */

    },
    beforeCreate: function(attrs, next) {
        attrs.time = moment.utc(attrs.time).toDate();
        next();
    }
};