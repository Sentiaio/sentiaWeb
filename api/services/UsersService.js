//
//Service for handeling various user related tasks
'use strict';
var wnode = require('when/node'),
    when = require('when');
// ## Login
//  returns a promise that will either be resolved with the user object,
//  or rejected with an error
exports.login = function(email, password) {
    // return Users.findOne as a promise, and query by the supplied email
    return wnode.call(Users.findOne, {
            email: email
        })
        .then(function(user) {
            if (!user) {
                // If the user does not exist, reject the promise
                return when.reject({
                    message: 'Incorrect email.'
                });
            }
            // return the user object upon verification
            // will reject the promise with an error if the password validation fails.
            // see Users model for more details
            return wnode.call(user.validatePassword, password)
                .yield(user);
        });
};