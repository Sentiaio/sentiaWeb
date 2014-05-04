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
var objectId = require('mongodb').ObjectID,
    _ = require('underscore');
module.exports = {
    timeline : function (req, res) {
        Heat.native(function (err, heat) {
            var pipeline;
            pipeline = [];
            pipeline.push({
                $match : {
                    time : {
                        $gte : Number(req.param('from', 0)),
                        $lt : Number(req.param('to', 0))
                    }
                }
            });
            console.log(pipeline[0]);
            pipeline.push({
                $group : {
                    _id : {$hour : '$time'},
                    avg : {$max : '$avg'}
                }
            });
            console.log(pipeline[1]);
            heat.aggregate(pipeline, function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err, 500);
                    return;
                }
                console.log(result);
                res.send(result);
            });
        });
    },
    find : function (req, res) {
        var data = _.extend(req.body, req.query);
        Heat.native(function (err, heat) {
            var query, projection;
            query =  {
                cam : objectId(data.cam),
                data : {$ne : []}
            };
            projection = {
                data : 1,
                cam :1,
                store: 1,
                company : 1,
                time : 1,
                cols :1,
                rows : 1,
                max : 1,
                avg : 1

            };
            console.log(query);
            console.log(data);
            heat.findOne(query, function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err, 500);
                }
                console.log(result);
                res.send(result);

            });
        });

    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HeatController)
   */
    _config: {}

  
};
