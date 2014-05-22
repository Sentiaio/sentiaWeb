/**
 * login controller
 * @author Andreas
 * @date   2014-04-11
 */

/*jslint browser:true, nomen:true*/
angular.module('app')
    .controller('CamCtrl', function($scope, $location, Cam) {
        'use strict';
        var today;
        $scope.selected = $location.$$hash;
        today = moment()
            .minutes(0)
            .seconds(0)
            .millisecond(0)
            .subtract('hours', 1);
        console.log(today);
        $scope.mapQuery = {
            limit: 1,
            date: today,
            hour: today.hour(),
            type: 'heat'
        };
        $scope.setHour = function(hour) {
            $scope.mapQuery.hour = hour;
            // updateMap();
        };
        $scope.$root.showHeader = true;
        $scope.$root.page = 'cam';
        $scope.store = "52fd38afe0461b48a7f9c297"; // because we only have one :)
        $scope.cams = [];
        $scope.$watch('mapQuery.date', function() {
            // updateMap();
        });
        $scope.$watch('mapQuery.type', function() {
            // updateMap();
        });
        $scope.$watch('selectedCam', function() {
            // updateMap();
        });
    }
);