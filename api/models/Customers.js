/**
 * Customers
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
            type: 'datetime',
            required: true
        },
        in : {
            type: 'integer',
            required : true
        },
        out : {
            type: 'integer',
            required : true
        },
        bounce : {
            type: 'integer',
            required : true
        }

        /* e.g.
    nickname: 'string'
    */
    },
    beforeCreate: function(attrs, next) {
        atters.cam = Number(atters.cam);
        atters.store = Number(atters.store);
        atters.company = Number(atters.company);
        attrs.time = moment(attrs.time).format('YYYY-MM-DD HH:mm:SS');
        console.log(attrs);
        next();
    }
};