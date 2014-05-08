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
                    var opacity, scalex, scaley;
                    if (!scope.data) {
                        return;
                    }

                    opacity = d3.scale.linear()
                        .domain([0, scope.data.max])
                        .range(['.1', '.5']);

                    scalex = d3.scale.linear()
                        .domain([0, scope.data.cols])
                        .range([0, 1200]);
                    scaley = d3.scale.linear()
                        .domain([0, scope.data.rows])
                        .range([0, 1200]);


                    d3.select(element[0])
                        .select('svg')
                        .attr('viewBox', '0 0 1200 1200') // + scope.data.cols + ' ' + scope.data.rows)
                    .selectAll('path')
                        .remove()
                        .data(scope.data.data)
                        .enter()
                        .append('path')
                        .attr('fill', 'red')
                        .attr('d', 'm 15 0 l-30 -10 l 5 10 l-5 10 z')
                        .attr('transform', function(d) {
                            return 'translate(' + scalex(d.x) + ',' + scaley(d.y) + '), rotate(' + d.angle + ')';
                        })
                        .attr('opacity', function(d) {
                            return opacity(d.value);
                        });
                });
            }
        };
    });