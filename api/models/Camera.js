/**
 * Cameras
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
/*jslint node:true, nomen:true*/
'use strict';
module.exports = {
    attributes: {
        company : {
            type :"integer",
            required : true
        },
        store : {
            type :"integer",
            required : true
        },
        name : {
            type :"string",
            required : true
        },
        cols : 'integer',
        rows : 'integer'

    }

};
