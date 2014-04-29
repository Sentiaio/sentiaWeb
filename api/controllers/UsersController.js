/**
 * UsersController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
/*jslint node:true, nomen:true*/
/* global Users:true */
'use strict';

module.exports = {
    
  
    login: function (req, res) {
        var bcrypt = require('bcrypt');
        if (!req.body.email || !req.body.password) {
            res.json({error : 'Missing user or password'}, 404);
            return;
        }
        Users.findOneByEmail(req.body.email).done(function (err, user) {
            if (err) {res.json({ error: 'DB error' }, 509);}

            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, match) {
                    if (err) {res.json({ error: 'Server error' }, 500);}

                    if (match) {
                        // password match
                        req.session.user = user;
                        res.json(user);
                    } else {
                        // invalid password
                        if (req.session.user) {req.session.user = null;}
                        res.json({ error: 'Invalid password' }, 400);
                    }
                });
            } else {
                res.json({ error: 'User not found' }, 404);
            }
        });
    },
    logout : function (req, res) {
        req.session.destroy();
        res.send();
    },
    /**
    * Overrides for the settings in `config/controllers.js`
    * (specific to UsersController)
    */
    _config: {}

  
};
