// Model for users
//
'use strict';
var bcrypt = require('bcrypt');
module.exports = {
    // ## Attributes
    attributes: {
        email: {
            type: 'email',
            required: true
        },
        company : {
            type : 'integer',
            required : true
        },
        password: {
            type: 'string',
            required: true
        },
        firstname: {
            type: 'string'
        },
        lastname: {
            type: 'string'
        },
        // ### toJSON
        // called before returning an object to the frontend
        toJSON: function() {
            var obj = this.toObject();
            // delete the users password from the returned JSON
            delete obj.password;
            return obj;
        },
        // ### validatePassword
        // check if the supplies password matches the users
        validatePassword: function(password, next) {
            // using bcrypts compare function
            bcrypt.compare(password, this.password, function(err, res) {
                // return an err if bcrypt fails
                if (err) {
                    next(err);
                }
                // return err = undefined if the password matches
                if (res === true) {
                    next();
                    // ... or : {message : 'Incorrect password'} if it doesn't
                } else {
                    next({
                        message: 'Incorrect password'
                    });
                }
            });
        }
    },
    // ## BeforeCreate
    // is run before a new user is created
    beforeCreate: function(attrs, next) {
        // if no password is supplied
        if (!attrs.password) {
            next('Password is indefined'); // return an err
            return;
        }
        // create a salt for password hash
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                next(err);
            }
            // hash the users password
            bcrypt.hash(attrs.password, salt, function(err, hash) {
                if (err) {
                    next(err);
                }
                // swap the supplied password for the hash, before sending it to the database
                attrs.password = hash;
                next();
            });
        });
    }

};