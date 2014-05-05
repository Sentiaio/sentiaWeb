/*jslint browser:true, nomen:true*/
/*global angular:true, $:true, console: false*/
angular.module('app')
	.filter('heatfilter', [function () {
		'use strict';
		return function (input) {
			var i, output;
			if (!input || !input.data) {
				return;
			}
			output  = angular.extend({}, input);
			output.data = [];
			for (i = 0; i < input.data.length; i += 1) {
				output.data[i] = [input.data[i].x, input.data[i].y, input.data[i].count];
			}
			return output;

		};
	}]);