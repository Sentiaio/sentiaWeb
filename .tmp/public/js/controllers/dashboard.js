/**
 * Controller for the dashborad view
 * @author Andreas
 * @date   2014-04-11
 */

/*global app:true, $:true, console: false, angular:false */
angular.module('app')
    .controller('DashboardCtrl', ['$scope', '$http', function ($scope, $http) {
        'use strict';
        $scope.$root.showHeader = true;
        $scope.$root.page = 'dash';

    }
]);


