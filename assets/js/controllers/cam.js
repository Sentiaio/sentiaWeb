/**
 * login controller
 * @author Andreas
 * @date   2014-04-11
 */

/*jslint browser:true, nomen:true*/
angular.module('app')
    .controller('CamCtrl', ['$scope', '$http' , function ($scope, $http) {
        'use strict';
        var updateMap, today, getCams, getTimeline;
        updateMap = function () {
            if (!$scope.selectedCam || ! $scope.mapQuery.date) {
                return;
            }
            var query =  {
                date : new Date($scope.mapQuery.date),
                cam : $scope.selectedCam.id

            };
            
            query.date.setHours($scope.mapQuery.hour);
            $http.post('/' + $scope.mapQuery.type + '/find', query)
                .success(function (response) {
                    if ($scope.mapQuery.type === 'heat') {
                        $scope.flowmap = undefined;
                        $scope.heatmap = response;
                    } else {
                        $scope.flowmap = response;
                        $scope.heatmap = undefined;
                    }
                    console.log(response);
                })
                .error(function (error, status) {
                    console.log(status);
                    console.log(error);
                });
        };
        getCams = function () {
            console.log("fetching cams");
            var query =  {
                // where : {
                //     store : "52fd38afe0461b48a7f9c297"
                // }
            };
            $http.post('/cameras/find', query)
                .success(function (response, status) {
                    if (status !== 200) {
                        console.log(status);
                    }
                    console.log(response);
                    $scope.cams = response;
                });
        };
        getTimeline = function () {
            if (!$scope.mapQuery.date || !$scope.selectedCam) {return;}
            var data = {
                date : $scope.mapQuery.date,
                cam : $scope.selectedCam.id
            };
            $http.post('/' + $scope.mapQuery.type + '/timeline', data)
                .success(function (response) {
                    var data = [24], i, max = 1;
                    for (i = 0; i < 24; i += 1) {
                        data[i] = 0;
                    }
                    for (i = 0; i < response.length; i += 1) {
                        data[response[i]._id] = response[i].avg || 0;
                        max = Math.max(max, response[i].avg);
                    }
                    $scope.timeline = {
                        max : max,
                        data : data
                    };

                })
                .error(function (err, status) {
                    console.log(status);
                    console.error(err);
                });
        };
        today = moment()
            .minutes(0)
            .seconds(0)
            .millisecond(0)
            .subtract('hours', 1);
        console.log(today);
        $scope.mapQuery = {
            limit : 1,
            date : today,
            hour : today.hour(),
            type : 'heat'
        };
        $scope.setHour = function (hour) {
            $scope.mapQuery.hour = hour;
            updateMap();
        };
        $scope.$root.showHeader = true;
        $scope.$root.page = 'cam';
        $scope.store = "52fd38afe0461b48a7f9c297"; // because we only have one :)
        $scope.cams = [];
        getCams();
        $scope.$watch('mapQuery.date', function () {
            getTimeline();
            updateMap();
        });
        $scope.$watch('mapQuery.type',function () {
            getTimeline();
            updateMap();
        });
        $scope.$watch('selectedCam', function () {
            getTimeline();
            updateMap();
        });
        

    }]);

