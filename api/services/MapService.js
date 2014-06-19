var _ = require('lodash'),
    squel = require('squel'),
    moment = require('moment'),
    when = require('when');
exports.create = function (payload) {
    var deferred = when.defer(),
        rows,
        query = squel.insert();
    console.log('payload');
    console.log(payload);

    rows = payload.data.reduce(function (result, item) {
        result.push({
            "cam": payload.cam,
            "store": payload.store,
            "company": payload.company,
            "time": moment(payload.time).format('YYYY-MM-DD HH:mm:SS'),
            x : item.x,
            y : item.y,
            heat : item.heat,
            dx : item.dx,
            dy : item.dy
        })
        return result;
    }, [])
    console.log(rows);
    query.into('map')
        .setFieldsRows(rows);
    Map.query(query.toString(), function (err, result) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(result);
        }

    });
    return deferred.promise;
},
exports.find = function (payload) {
    var query, deferred, date;
    date = moment(payload.date).hours(payload.hour);
    deferred = when.defer(),
    query = squel.select()
        .field('x')
        .field('y')
        .field('avg(dx) as dx')
        .field('avg(dy) as dy')
        .field('avg(heat) as heat')
        .from('map')
        .group('x')
        .group('y');

    Map.query(query.toString(), function (err, result) {
         if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;

}