//
//Service for handeling various user related tasks
'use strict';
var moment = require('moment'),
    objectId = require('mongodb').ObjectID,
    when = require('when');
// ## Login
//  returns a promise that will either be resolved with the user object,
//  or rejected with an error
exports.find = function (payload, user) {
    var from, to;
    // define the time range
    from = moment(payload.date)
        .utc()
        .hours(0)
        .minutes(0)
        .seconds(0)
        .milliseconds(0)
        .toDate();
    to = moment(from)
        .utc()
        .add('day', 1)
        .toDate();
    console.log('query');
    console.log({
            time : {'>=' : from, '<' :to },
            company : user.company
        });
    return Customers.find()
        .where({
            time : {'>=' : from, '<' :to },
            company : objectId(user.company)
        })
        . then(function (customers) {
            return customers;
        });
};
exports.getCustomerData = function (payload, user) {
    var buildPipeline = function () {
        // define the time range
        var from = moment(payload.date)
            .utc()
            .hours(0)
            .minutes(0)
            .seconds(0)
            .milliseconds(0)
            .toDate();
        var to = moment(from)
            .utc()
            .add('day', 1)
            .toDate();
        var pipeline = [];
        var groupID = {};
        pipeline.push({
            $match :  {
                time :  {
                    $gte : from,
                    $lt: to
                },
                store : objectId(payload.store),
                company : objectId(user.company)
            }
        });
        pipeline.push({
            $project: {
                time : 1,
                in : 1,
                out : 1
            }
        });
        groupID['$'+payload.grouping] = '$time';
        pipeline.push({
            $group : {
                _id : groupID
            },
            in : {$sum : '$in'},
            out : {$sum : '$out'}
        });
        return pipeline;
    };
    var pipeline = buildPipeline();




};