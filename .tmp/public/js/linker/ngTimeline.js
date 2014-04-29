/*jslint browser:true, nomen:true*/
/*global app:true*/

app.directive('ngTimeline', function () {
	'use strict';
	return {
		restrict : 'E',
		scope : {
			data : "=data"
		},
		template : 'Im a timeline {{data}}'
	};
});