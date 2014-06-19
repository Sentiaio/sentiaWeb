/**
 * Map
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    x : {
        type :'integer',
        required : true
    },
    y : {
        type :'integer',
        required : true
    },
    angle:  {
        type :'integer',
        required : true
    },
    flow : {
        type :'float',
        required : true
    },
    heat : {
        type :'float',
        required : true
    },
    cam : {
        type :'integer',
        required : true
    },
    company : {
        type :'integer',
        required : true
    },
    time : {
        type : "datetime",
        required : true

    }

  	/* e.g.
  	nickname: 'string'
  	*/

  }

};
