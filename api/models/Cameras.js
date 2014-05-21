/**
 * Cameras
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
/*jslint node:true, nomen:true*/
'use strict';
var objectId = require('mongodb').ObjectID;
module.exports = {
    attributes: {
        /* e.g.
        nickname: 'string'
        */
        id : {
            type :"string",
            required : true
        },
        company : {
            type :"string",
            required : true
        },
        store : {
            type :"string",
            required : true
        },
        name : {
            type :"string",
            required : true
        },

    },
    beforeCreate: function (attrs, next) {
        try {
            attrs.company = objectId(attrs.company);
            attrs.store = objectId(attrs.store);
            if (attrs.id) {
                attrs.id = objectId(attrs.id);
            }
        } catch (e) {
            return next('invalid object id');
        }

        next();
    }

};
