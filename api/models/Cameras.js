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

    }

};
