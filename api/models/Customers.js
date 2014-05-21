/**
 * Customers
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */
'use strict';
var objectId = require('mongodb').ObjectID;
module.exports = {

    attributes: {
        cam: {
            type: 'STRING',
            required: true
        },
        store: {
            type: 'STRING',
            required: true
        },
        company: {
            type: 'STRING',
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
        try {
            attrs.cam = objectId(attrs.cam);
            attrs.store = objectId(attrs.store);
            attrs.company = objectId(attrs.company);
            attrs.time = new Date(attrs.time);
        } catch (e) {
            return next('Could not convert to objectId');
        }
        next();
    }
};