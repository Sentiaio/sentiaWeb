/**
 * Flowmap directive
 * @author  Andreas Møller
 * 2014
 */
'use strict';
angular.module('sFlowmap', [])
    .directive('sFlowmap', function() {
        return {
            template: '<div><svg></svg></div>',
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function postLink(scope, element) {
                scope.$watch('data', function() {
                    var color, scalex, scaley, width, height, max = 1000;

                    if (!scope.data) {
                        return;
                    }
                    var data = scope.data.map(function (item) {
                        if (item.x%3 === 0 && item.y%3 === 0) {
                            var i = {
                                x : item.x,
                                y : item.y,
                                angel : Math.atan2(item.dx,item.dy),
                                magnitude :Math.sqrt(Math.pow(item.dx,2), Math.pow(item.dy,1))
                            };
                            if (i.magnitude > (scope.data.max * 0.1)) {
                                return i;
                            }
                        }
                    });
                    width = element.width()*2.5;
                    height = element.height() * 2.5;
                    color = d3.scale.linear()
                        .domain([0, scope.data.max* 0.3, scope.data.max])
                        .range(['yellowgreen','#FFFF83', 'red']);


                    scalex = d3.scale.linear()
                        .domain([0, scope.data.cols])
                        .range([0, width]);
                    scaley = d3.scale.linear()
                        .domain([0, scope.data.rows])
                        .range([0, height]);
                    d3.select(element[0])
                        .select('svg')
                        .text('')
                        .attr('viewBox', '0 0 '+width+' '+height) // + scope.data.cols + ' ' + scope.data.rows)
                        .selectAll('path')
                        // .data(scope.data.data)
                        .data(data)
                        .enter()
                        .append('path')
                        .attr('fill', function (d) {
                        	return color(d.magnitude);
                        })
                        .attr('d', 'm 15 0 l-30 -10 l 5 10 l-5 10 z')
                        .attr('transform', function(d) {
                            return 'translate(' + scalex(d.x) + ',' + scaley(d.y) + '), rotate(' + d.angle/(2*Math.PI)*360 + ')';
                        })
                });
            }
        };
    });