/**
 * Stores
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
        id : "STRING",
        name : 'STRING',
        /* e.g.
        nickname: 'string'
        */
    
    },
    beforeCreate: function (cam, next) {
        try {
            cam.id = objectId(cam.id);
        } catch (e) {
            return next('"id" is invalid');
        }
        next();
    }

};
