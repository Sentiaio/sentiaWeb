/*jslint browser:true, nomen:true*/
/*global angular:true, $:true, console: false*/
angular.module('app')
	.filter('heatfilter', [function () {
		'use strict';
		return function (input) {
			var i, output;
			if (!input || !input.data) {
				return;
			}
			output  = angular.extend({}, input);
			for (i = 0; i < output.data.length; i += 1) {
				output.data[i] = [output.data[i].x, output.data[i].y, output.data[i].count];
			}
			return output;

		};
	}]);