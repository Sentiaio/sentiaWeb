// Service used by the heat controller
'use strict';
var when = require('when'),
    moment = require('moment'),
    objectId = require('mongodb').ObjectID;
// ## Get Timeline
// returns a promise of a timeline object
exports.getTimeline = function (data, user) {
    return when.promise(function (resolve, reject) {
        Heat.native(function(err, heat) {
            var from, to;
            // reset time
            from = moment.utc(data.date)
                .hour(0)
                .minutes(0)
                .seconds(0)
                .milliseconds(0)
                .toDate();
            to = moment.utc(from)
                .add('days', 1)
                .toDate();
            console.log(from.getTimezoneOffset());
            function buildPipeline () {
                var pipeline = [];
                pipeline.push({
                    $match: {
                        company: objectId(user.company),
                        cam: objectId(data.cam),
                        createdAt: {
                            $gte: from,
                            $lt: to
                        },
                        data: {
                            $ne: []
                        }
                    }
                });
                pipeline.push({
                    $unwind: '$data'
                });
                pipeline.push({
                    $group: {
                        _id: {
                            $hour: '$time'
                        },
                        avg: {
                            $avg: '$avg'
                        },
                        count: {
                            $sum: 1
                        }
                    }
                });
                pipeline.push({
                    $sort : {time : 1}
                });
                return pipeline;
            }
            var pipeline = buildPipeline();

            heat.aggregate(pipeline, function(err, result) {
                var i;
                if (err) {
                    return reject(err);
                }
                for (i = 0; i < result.length; i += 1) {
                    result[i].value = result[i].avg * result[i].count;
                }
                resolve(result);
            });
        });
    });
};
// ## Find
// returns a heat map
exports.find = function (data, user) {
    return when.promise(function (resolve, reject) {
        var from, to;
        // define the time range
        to = moment.utc(data.date).hour(data.hour)
            .minutes(0)
            .seconds(0)
            .milliseconds(0)
            .toDate();
        from = moment.utc(to)
            .subtract('hour', 1)
            .toDate();
        Heat.native(function(err, heat) {
            var query, projection;
            // get the heatmap based on the users company, and time range
            query = {
                company: objectId(user.company),
                cam: objectId(data.cam),
                createdAt: {
                    $gte: from,
                    $lt: to
                }
            };
            projection = {
                data: 1,
                cam: 1,
                store: 1,
                company: 1,
                time: 1,
                cols: 1,
                rows: 1,
                max: 1,
                avg: 1
            };
            heat.findOne(query, function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    });
};