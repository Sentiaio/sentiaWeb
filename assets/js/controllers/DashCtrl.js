/**
 * Controller for the dashborad view
 * @author Andreas
 * @date   2014-04-11
 */

/*global app:true, $:true, console: false, angular:false */
angular.module('app')
    .controller('DashCtrl', function($scope, $http) {
            'use strict';
            $scope.$root.showHeader = true;
            $scope.$root.page = 'dash';
            $scope.customerData = {
                "xScale": "time",
                "yScale": "linear",
                "type": "line",
                "main": [{
                    "className": ".pizza",
                    "data": [{
                        "x": "2012-11-05",
                        "y": 1
                    }, {
                        "x": "2012-11-06",
                        "y": 6
                    }, {
                        "x": "2012-11-07",
                        "y": 13
                    }, {
                        "x": "2012-11-08",
                        "y": -3
                    }, {
                        "x": "2012-11-09",
                        "y": -4
                    }, {
                        "x": "2012-11-10",
                        "y": 9
                    }, {
                        "x": "2012-11-11",
                        "y": 6
                    }]
                }]
            };
            $scope.lineChartOpts = {
                "dataFormatX": function(x) {
                    return d3.time.format('%Y-%m-%d').parse(x);
                },
                "tickFormatX": function(x) {
                    return d3.time.format('%A')(x);
                }
            };
        }
    );