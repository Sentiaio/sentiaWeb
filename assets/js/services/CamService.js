angular.module('app')
    .service('Cam', function($http) {
        'use strict';
        // this.updateMap = function(query) {
        //     query.cam = this.selected.id;
        //     return $http.post('/' + query.type + '/find', query)
        //         .then(function(response) {
        //             if ($scope.mapQuery.type === 'heat') {
        //                 $scope.flowmap = undefined;
        //                 $scope.heatmap = response;
        //             } else {
        //                 $scope.flowmap = response;
        //                 $scope.heatmap = undefined;
        //             }
        //             mixpanel.track('View Map', {
        //                 cam: query.cam,
        //                 date: query.date,
        //                 type: $scope.mapQuery.type
        //             });
        //             console.log(response);
        //         })
        //         .otherwise(function(error, status) {
        //             console.log(status);
        //             console.log(error);
        //             mixpanel.track('View Map Error', {
        //                 cam: query.cam,
        //                 date: query.date
        //             });
        //         });
        // };
        // this.getCams = function(query) {
        //     return $http.post('/cameras/find', query)
        // };
        // this.getTimeline = function(query) {
        //     query.cam = this.selected.id;
        //     return $http.post('/' + query.type + '/timeline', query)
        //         .success(function(response) {
        //             var data = [24],
        //                 i,
        //                 max = 1;
        //             for (i = 0; i < 24; i += 1) {
        //                 data[i] = 0;
        //             }
        //             for (i = 0; i < response.length; i += 1) {
        //                 data[response[i]._id] = response[i].count || 0;
        //                 max = Math.max(max, response[i].count);
        //             }
        //             mixpanel.track('Update Timeline', {
        //                 cam: data.cam,
        //                 date: data.date
        //             });
        //             return {
        //                 max: max,
        //                 data: data
        //             };
        //         })
        //         .error(function(err, status) {
        //             console.log(status);
        //             console.error(err);
        //         });
        // };
    });