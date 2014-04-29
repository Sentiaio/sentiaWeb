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
        id : "STRING",
        store : 'STRING',
        name : 'STRING'
    
    },
    beforeCreate: function (cam, next) {
        try {
            cam.store = objectId(cam.store);
            cam.id = objectId(cam.id);
        } catch (e) {
            return next('invalid object id');
        }

        next();
    }

};
