/**
 * login controller
 * @author Andreas
 * @date   2014-04-11
 */

/*jslint browser:true, nomen:true*/
/*global app:true, $:true, console: false, angular:false */

angular.module('app')
    .controller('LoginCtrl', ['$scope', '$http', '$location', function ($scope,  $http, $location) {
        'use strict';
        $scope.$root.showHeader = false;
        $scope.credentials = {};
        $scope.login = function () {
            console.log($scope.credentials);
            if(!$scope.credentials.email || !$scope.credentials.password) {return;}
            $http.post('/users/login', $scope.credentials)
                .success(function (response) {
                    $location.path('/cameras');
                    $scope.$root.showHeader = true;
                    $scope.$root.user = response;
                })
                .error(function (error) {
                    console.log('ERROR');
                    $scope.loginError = error.error;
                });
        };
        
    }]);


