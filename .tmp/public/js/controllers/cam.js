/**
 * login controller
 * @author Andreas
 * @date   2014-04-11
 */

/*jslint browser:true, nomen:true*/
/*global app:true, $:true, console: false, angular:false */
angular.module('app')
    .controller('CamCtrl', ['$scope', '$http' , function ($scope, $http) {
        'use strict';
        $scope.$root.showHeader = true;
        $scope.$root.page = 'cam';
        $scope.store = "52fd38afe0461b48a7f9c297";
        console.log('parent');
        console.log($scope.$root);
        $scope.cams = [];
        $scope.getCams = function () {
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
        $scope.mapQuery = {
            limit : 1
        };
        $scope.map = {
            'type':'heat'
        };
        $scope.getCams();
        $scope.$watch('mapQuery.date', function () {
            if (!$scope.mapQuery.date) {return;}
            var data = {
                date : $scope.mapQuery.date,
                cam : $scope.selectedCam.id
            };
            $http.post('/' + $scope.map.type + '/timeline', data)
                .success(function (response) {
                    var data = [24], i, j, max = 1;
                    for (i = 0; i < 24; i += 1) {
                        data[i] = 0;
                    }
                    for (i = 0; i < response.length; i += 1) {
                        data[response[i]._id] = response[i].avg || 0;
                        max = Math.max(max, response[i].avg);
                    }
                    $scope.timeline = {
                        max : max,
                        data : data
                    };

                })
                .error(function (err, status) {
                    console.error(err);
                });
        });
        $scope.updateMap = function (hour) {
            $scope.mapQuery.date.setHours(hour);
            $scope.mapQuery.cam = $scope.selectedCam.id;
            $http.post('/' + $scope.map.type + '/find', $scope.mapQuery)
                .success(function (response) {
                    if ($scope.map.type === 'heat') {
                        $scope.flowmap = undefined;
                        $scope.heatmap = response;
                    } else {
                        $scope.flowmap = response;
                        $scope.heatmap = undefined;
                    }
                    console.log(response);
                })
                .error(function (error, status) {

                });
        };
    }]);

