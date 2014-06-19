var _ = require('lodash'),
    moment = require('moment'),
    when = require('when');
exports.create = function (payload) {
    var deferred = when.defer(),
        keys = ['createdAt','updatedAt','x','y','heat','angle','flow','time','cam', 'company']
        values = keys.map(function (key) {
            if (key === 'createdAt' || key === 'updatedAt') {
                return moment().format('YYYY-MM-DD HH:mm:SS+00');
            } else if (key === 'time') {
                return moment(payload.time).format('YYYY-MM-DD HH:mm:SS+00');
            } else {
                return payload[key];
            }
        });
    console.log(keys);
    console.log(values);
    console.log('INSERT INTO map ('+keys.join(',')+') VALUES ('+values.join(',')+')');
    Map.query('INSERT INTO map ('+keys.join(',')+') VALUES ('+values.join(',')+')', function (err, result) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(result);
        }

    });
    return deferred.promise;
}