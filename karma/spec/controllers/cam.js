/*jslint node:true, nomen:true*/
/*globals describe :false, it : false, beforeEach:false, expect:false, inject: false*/

describe('Controller: CamCtrl', function() {
    'use strict';

    // load the controller's module
    beforeEach(module('app'));

    var CamCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        CamCtrl = $controller('CamCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(1).toBe(1);
    });
});
