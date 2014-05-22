/**
 * login controller
 * @author Andreas
 * @date   2014-04-11
 */

/*jslint browser:true, nomen:true*/
angular.module('app')
    .controller('StoreCtrl', function($scope, Store) {
        'use strict';
        $scope.$root.showHeader = true;
        $scope.$root.page = 'store';
        Store.getCameras()
            .then(function(cameras) {
                $scope.cameras = cameras;
            });
    });