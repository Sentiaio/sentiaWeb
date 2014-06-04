/**
 * Flowmap directive
 * @author  Andreas Møller
 * 2014
 */
'use strict';
angular.module('barchart', [])
    .directive('barchart', function() {
        return {
            template: '<svg></svg>',
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function postLink(scope, element) {
                scope.$watch('data', function() {

                    var data =  [
                        {
                            "time" : new Date("2014-06-03T21:49:36.627Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T20:49:29.428Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T19:49:22.240Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T18:49:15.032Z"),
                            "in" : 85,
                            "out" : 79
                        },
                        {
                            "time" : new Date("2014-06-03T17:49:08.225Z"),
                            "in" : 152,
                            "out" : 124
                        },
                        {
                            "time" : new Date("2014-06-03T16:49:03.295Z"),
                            "in" : 174,
                            "out" : 201
                        },
                        {
                            "time" : new Date("2014-06-03T15:48:57.287Z"),
                            "in" : 64,
                            "out" : 60
                        },
                        {
                            "time" : new Date("2014-06-03T14:48:59.090Z"),
                            "in" : 22,
                            "out" : 22
                        },
                        {
                            "time" : new Date("2014-06-03T13:49:00.927Z"),
                            "in" : 19,
                            "out" : 25
                        },
                        {
                            "time" : new Date("2014-06-03T12:49:02.781Z"),
                            "in" : 20,
                            "out" : 19
                        },
                        {
                            "time" : new Date("2014-06-03T11:49:04.631Z"),
                            "in" : 38,
                            "out" : 25
                        },
                        {
                            "time" : new Date("2014-06-03T10:49:06.488Z"),
                            "in" : 23,
                            "out" : 15
                        },
                        {
                            "time" : new Date("2014-06-03T09:49:08.342Z"),
                            "in" : 18,
                            "out" : 28
                        },
                        {
                            "time" : new Date("2014-06-03T08:49:10.191Z"),
                            "in" : 12,
                            "out" : 18
                        },
                        {
                            "time" : new Date("2014-06-03T07:49:12.045Z"),
                            "in" : 4,
                            "out" : 1
                        },
                        {
                            "time" : new Date("2014-06-03T06:49:13.902Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T05:49:15.747Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T04:49:17.608Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T03:49:19.448Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T02:49:16.961Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T01:49:09.748Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-03T00:49:02.537Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-02T23:48:55.331Z"),
                            "in" : 0,
                            "out" : 0
                        },
                        {
                            "time" : new Date("2014-06-02T22:48:48.130Z"),
                            "in" : 0,
                            "out" : 0
                        }
                    ];
                    data = data.map(function (d) {
                        return {
                            hour : d.time.getHours() + ':00',
                            value : d.in
                        };
                    });

                    var margin = {top: 20, right: 20, bottom: 30, left: 40},
                        width = element.width() - margin.left - margin.right,
                        height = element.height() - margin.top - margin.bottom;

                    var x = d3.scale.ordinal()
                        .rangeRoundBands([0, width], 0.1);

                    var y = d3.scale.linear()
                        .range([height, 0]);

                    var xAxis = d3.svg.axis()
                        .innerTickSize(0)
                        .outerTickSize(0)
                        .scale(x)
                        .orient("bottom");

                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .innerTickSize(0)
                        .outerTickSize(0)
                        .ticks(4, "");

                    var svg = d3.select(element[0]).select("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                      .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    x.domain(data.map(function(d) { return d.hour; }));
                    y.domain([0, d3.max(data, function(d) { return d.value; })]);

                    svg.append("g")
                      .attr("class", "x axis")
                      .attr("transform", "translate(0," + height + ")")
                      .call(xAxis);

                    svg.append("g")
                      .attr("class", "y axis")
                      .call(yAxis);

                    svg.selectAll("line.horizontalGrid").data(y.ticks(5)).enter()
                        .append("line")
                        .attr({
                            "class":"horizontalGrid",
                            "x1" : margin.right,
                            "x2" : width,
                            "y1" : function(d){ return y(d);},
                            "y2" : function(d){ return y(d);},
                            "fill" : "none",
                            "shape-rendering" : "crispEdges",
                            "stroke" : "black",
                            "stroke-width" : "1px"
                        });
                    svg.selectAll(".bar")
                      .data(data)
                    .enter().append("rect")
                      .attr("class", "bar")
                      .attr("x", function(d) { return x(d.hour); })
                      .attr("width", x.rangeBand())
                      .attr("y", height)
                      .attr("height", 0)
                      .transition()
                      .delay(function (d, i) { return i * 100;})
                      .ease('elastic')
                      .attr("y", function(d) { return y(d.value); })
                      .attr("height", function(d) { return height - y(d.value); })
                      .duration(1200)



                });
            }
        };
    });