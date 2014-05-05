
/*jslint node:true, nomen:true*/
/*globals describe :false, it : false, beforeEach:false, expect:false*/
describe('Filter: heatfilter', function() {
    'use strict';


    // load the filter's module
    beforeEach(module('app'));

    // initialize a new instance of the filter before each test
    var heatFilter;
    beforeEach(inject(function($filter) {
        heatFilter = $filter('heatfilter');
    }));

    it('Should return copy', function() {
        var input, output, i;
        input = {
            rows: 10,
            cols: 10,
            max: 10,
            avg : 5,
            data: [{
                x: 1,
                y: 2,
                count: 10
            }, {
                x: 3,
                y: 5,
                count: 8
            }]
        };
        console.log(output);
        output = heatFilter(input);
        expect(output).toBeDefined();
        for (i in input) {
            if (input.hasOwnProperty(i) && i !== 'data') {
                expect(output[i]).toBe(input[i]);
            }
        }
        expect(output.data.length).toBe(2);
        expect(input.data.length).toBe(2);
        
    });
    it('Should change the data to array form: [x,y,count]', function() {
        var input, output, i;
        input = {
            rows: 10,
            cols: 10,
            max: 10,
            avg : 5,
            data: [{
                x: 1,
                y: 2,
                count: 10
            }, {
                x: 3,
                y: 5,
                count: 8
            }]
        };
        console.log(output);
        output = heatFilter(input);
        expect(output).toBeDefined();
        expect(output.data.length).toBe(input.data.length);
        for (i = 0; i < output.data.length; i += 1) {
            expect(output.data[i][0]).toBe(input.data[i].x);
            expect(output.data[i][1]).toBe(input.data[i].y);
            expect(output.data[i][2]).toBe(input.data[i].count);

        }
    });



});
