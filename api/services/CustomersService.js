//
//Service for handeling various user related tasks
'use strict';
var moment = require('moment'),
    when = require('when');
exports.buildCustomerQuery = function (payload, user) {

};
exports.find = function (payload, user) {
    var from, to;
    // define the time range
    from = moment(payload.date)
        .utc()
        .hours(0)
        .minutes(0)
        .seconds(0)
        .milliseconds(0);
    to = moment(from)
        .utc()
        .add('day', 1);

    return Customers.find()
        .where({
            time : {'>=' : from.format('YYYY-MM-DD HH:mm:SS'), '<' :to.format('YYYY-MM-DD HH:mm:SS') },
            company : user.company
        })
        .then(function (customers) {
            return customers;
        });
};


exports.create = function (payload) {
    return Customers.create(payload);
};