// Service used by the heat controller
'use strict';
var when = require('when'),
    moment = require('moment'),
    objectId = require('mongodb').ObjectID;
// ## Get Timeline
// returns a promise of a timeline object
exports.getTimeline = function (data, user) {
    return when.promise(function (resolve, reject) {
        Flow.native(function(err, flow) {
            var from, to;
            // reset time
            from = moment(data.date)
                .utc()
                .hour(0)
                .minutes(0)
                .seconds(0)
                .milliseconds(0)
                .toDate();
            to = moment(from)
                .utc()
                .add('days', 1)
                .toDate();
            function buildPipeline () {
                var pipeline = [];
                pipeline.push({
                    $match: {
                        company: objectId(user.company),
                        cam: objectId(data.cam),
                        time: {
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
                    $sort : {_id : 1}
                });
                return pipeline;
            }
            var pipeline = buildPipeline();

            flow.aggregate(pipeline, function(err, result) {
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
        from = moment(data.date).hour(data.hour)
            .utc()
            .minutes(0)
            .seconds(0)
            .milliseconds(0)
            .toDate();
        to = moment(from)
            .utc()
            .add('hour', 1)
            .toDate();
        Flow.native(function(err, flow) {
            var query, projection;
            // get the flowmap based on the users company, and time range
            query = {
                company: objectId(user.company),
                cam: objectId(data.cam),
                time: {
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
            flow.findOne(query, function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    });
};