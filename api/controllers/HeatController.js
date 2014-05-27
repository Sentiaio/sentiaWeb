/**
 * HeatController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
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
/*globals Heat:true*/
'use strict';
var _ = require('underscore');
module.exports = {
    timeline: function(req, res) {
        HeatService.getTimeline(_.extend(req.body, req.query), res.session.user)
            .then(function (timeline) {
                res.send(timeline);
            })
            .catch(function (err) {
                res.send(500, err);
            });
    },
    find: function(req, res) {
        HeatService.find(_.extend(req.body, req.query), req.session.user)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                res.send(500, err);
            });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to HeatController)
     */
    _config: {}
};