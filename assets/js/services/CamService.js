angular.module('app')
    .service('Cam', function($http) {
        'use strict';
        this.getOverlay = function(query) {
            return $http.post('/' + query.type + '/find', query)
                .then(function(response) {
                    mixpanel.track('View Map', {
                        cam: query.cam,
                        date: query.date,
                        type: query.type
                    });
                    console.log('count');
                    if (response.data) {
                        console.log(response.data.data.length);
                    }
                    return response.data || undefined;
                })
                .catch(function(error) {
                    console.log(status);
                    console.log(error);
                    mixpanel.track('View Map Error', {
                        cam: query.cam,
                        date: query.date
                    });
                    return error;
                });
        };
        this.getTimeline = function(query) {
            return $http.post('/' + query.type + '/timeline', query)
                .then(function(response) {
                    var data = [24],
                        i,
                        max = 1;
                    for (i = 0; i < 24; i += 1) {
                        data[i] = 0;
                    }
                    for (i = 0; i < response.data.length; i += 1) {
                        data[response.data[i]._id] = response.data[i].count || 0;
                        max = Math.max(max, response.data[i].count);
                    }
                    mixpanel.track('Update Timeline', {
                        cam: data.cam,
                        date: data.date
                    });
                    return {
                        max: max,
                        data: data
                    };
                })
                .catch(function(err, status) {
                    console.log(status);
                    console.error(err);
                });
        };
    });