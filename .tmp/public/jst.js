this["JST"] = this["JST"] || {};

this["JST"]["assets/bower_components/angular-md5/example/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html>\n<head>\n  <title>Angular md5</title>\n  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min.js"></script>\n  <script src="../angular-md5.js"></script>\n</head>\n<body ng-app="YOUR_APP" ng-controller="MainCtrl" ng-cloak>\n  <img ng-src="http://www.gravatar.com/avatar/{{ email | gravatar }}">\n  <input type="email" ng-model="email" placeholder="Email Address" autofocus>\n  Your email Hash is: {{ message }}\n<!--\n<script src="app/bower_components/angular-md5/angular-md5.js"></script>\n-->\n<script>\n  angular.module(\'YOUR_APP\', [\n    \'angular-md5\', // you may also use \'ngMd5\' or \'gdi2290.md5\'\n    \'controllers\'\n  ]);\n  angular.module(\'controllers\', [])\n    .controller(\'MainCtrl\', [\'$scope\', \'md5\', function($scope, md5) {\n\n      $scope.$watch(\'email\' ,function() {\n        $scope.message = md5.createHash($scope.email || \'\');\n      });\n\n    }]);\n</script>\n</body>\n</html>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/docs/nav.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-toolbar btn-group pull-right">\n  <a class="btn btn-small btn-primary" href="https://github.com/angular-ui/bootstrap/tree/gh-pages">\n    <i class="icon-download-alt icon-white"></i> Download <small>(' +
((__t = ( pkg.version)) == null ? '' : __t) +
')</small>\n  </a>\n</div>\n<div class="margin: 10px;"></div>\n<ul class="nav pull-right bs-docs-social-buttons">\n  <li>\n  <iframe src="http://ghbtns.com/github-btn.html?user=angular-ui&repo=bootstrap&type=watch&count=true"\n    allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>\n  </li>\n</ul>\n\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/misc/demo/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="en" ng-app="bootstrapDemoApp" id="top">\n<head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n    <title>Angular directives for Bootstrap</title>\n    <meta name="description" content="AngularJS (Angular) native directives for Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required! Widgets: ';
 demoModules.forEach(function(module) { ;
__p +=
((__t = ( module.displayName )) == null ? '' : __t) +
', ';
 }); ;
__p += '">\n    <meta name="google-site-verification" content="7lc5HyceLDqpV_6oNHteYFfxDJH7-S3DwnJKtNUKcRg" />\n\n    <script src="http://cdnjs.cloudflare.com/ajax/libs/fastclick/0.6.7/fastclick.min.js"></script>\n    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/' +
((__t = ( ngversion )) == null ? '' : __t) +
'/angular.min.js"></script>\n    <script src="ui-bootstrap-tpls-' +
((__t = ( pkg.version)) == null ? '' : __t) +
'.js"></script>\n    <script src="assets/plunker.js"></script>\n    <script src="assets/app.js"></script>\n\n    <link href="http://netdna.bootstrapcdn.com/bootstrap/' +
((__t = ( bsversion )) == null ? '' : __t) +
'/css/bootstrap.min.css" rel="stylesheet"/>\n    <link rel="stylesheet" href="assets/rainbow.css"/>\n    <link rel="stylesheet" href="assets/demo.css"/>\n    <link rel="author" href="https://github.com/angular-ui/bootstrap/graphs/contributors">\n</head>\n<body class="ng-cloak" ng-controller="MainCtrl">\n<header class="navbar navbar-default navbar-fixed-top">\n    <div class="navbar-inner">\n        <div class="container">\n            <div class="navbar-header">\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3" ng-click="isCollapsed = !isCollapsed">\n                    <span class="sr-only">Toggle navigation</span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </button>\n                <a class="navbar-brand visible-xs" href="#">UI Bootstrap</a>\n            </div>\n            <nav class="hidden-xs">\n                <ul class="nav navbar-nav">\n                    <a href="#" role="button" class="navbar-brand">\n                        UI Bootstrap\n                    </a>\n                    <li class="dropdown">\n                        <a href="#" role="button" class="dropdown-toggle">\n                            Directives <b class="caret"></b>\n                        </a>\n                        <ul class="dropdown-menu">\n                            ';
 demoModules.forEach(function(module) {  ;
__p += '<li><a href="#' +
((__t = ( module.name )) == null ? '' : __t) +
'">' +
((__t = ( module.displayName )) == null ? '' : __t) +
'</a></li>';
 }); ;
__p += '\n                        </ul>\n                    </li>\n                    <li><a href="#getting_started">Getting started</a></li>\n                </ul>\n            </nav>\n            <nav class="visible-xs" collapse="!isCollapsed">\n                <ul class="nav navbar-nav">\n                    <li><a href="#getting_started" ng-click="isCollapsed = !isCollapsed">Getting started</a></li>\n                    <li><a href="#directives_small" ng-click="isCollapsed = !isCollapsed">Directives</a></li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</header>\n<div class="header-placeholder"></div>\n<div role="main">\n    <header class="bs-header text-center" id="overview">\n        <div class="container">\n            <h1>\n                UI Bootstrap\n            </h1>\n\n            <p>Bootstrap components written in pure <a href="http://angularjs.org">AngularJS</a> by the <a\n                    href="http://angular-ui.github.io">AngularUI Team</a></p>\n\n            <p>\n                <a class="btn btn-outline-inverse btn-lg" href="https://github.com/angular-ui/bootstrap"><i class="icon-github"></i>Code on Github</a>\n                <a class="btn btn-outline-inverse btn-lg" ng-click="showDownloadModal()">\n                    <i class="glyphicon glyphicon-download-alt"></i> Download <small>(' +
((__t = ( pkg.version)) == null ? '' : __t) +
')</small>\n                </a>\n                <a class="btn btn-outline-inverse btn-lg" ng-click="showBuildModal()"><i class="glyphicon glyphicon-wrench"></i> Create a Build</a>\n            </p>\n        </div>\n        <div class="bs-social container">\n            <ul class="bs-social-buttons">\n                <li>\n                    <iframe src="http://ghbtns.com/github-btn.html?user=angular-ui&repo=bootstrap&type=watch&count=true"\n                            allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>\n                </li>\n                <li>\n                    <iframe src="http://ghbtns.com/github-btn.html?user=angular-ui&repo=bootstrap&type=fork&count=true"\n                            allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>\n                </li>\n                <li>\n                    <a href="https://twitter.com/share" class="twitter-share-button"\n                       data-hashtags="angularjs">Tweet</a>\n                    <script>!function (d, s, id) {\n                        var js, fjs = d.getElementsByTagName(s)[0];\n                        if (!d.getElementById(id)) {\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "//platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n                        }\n                    }(document, "script", "twitter-wjs");</script>\n                </li>\n                <li>\n                    <!-- Place this tag where you want the +1 button to render. -->\n                    <div class="g-plusone" data-size="medium"></div>\n\n                    <!-- Place this tag after the last +1 button tag. -->\n                    <script type="text/javascript">\n                        (function () {\n                            var po = document.createElement(\'script\');\n                            po.type = \'text/javascript\';\n                            po.async = true;\n                            po.src = \'https://apis.google.com/js/plusone.js\';\n                            var s = document.getElementsByTagName(\'script\')[0];\n                            s.parentNode.insertBefore(po, s);\n                        })();\n                    </script>\n                </li>\n            </ul>\n        </div>\n    </header>\n    <div class="container">\n        <div class="row">\n            <div class="col-md-12">\n                <section class="bs-sidebar visible-xs" id="directives_small">\n                    <ul class="nav bs-sidenav">\n                        <li><a href="#"><strong>Directives</strong></a></li>\n                        ';
 demoModules.forEach(function(module) {  ;
__p += '\n                            <li><a href="#' +
((__t = ( module.name )) == null ? '' : __t) +
'">' +
((__t = ( module.displayName )) == null ? '' : __t) +
'</a></li>\n                        ';
 }); ;
__p += '\n                    </ul>\n                </section>\n\n                <section id="getting_started">\n                    <div class="page-header">\n                        <h1>Getting started</h1>\n                    </div>\n                    <h3>Dependencies</h3>\n                    <p>\n                        This repository contains a set of <strong>native AngularJS directives</strong> based on\n                        Bootstrap\'s markup and CSS. As a result no dependency on jQuery or Bootstrap\'s\n                        JavaScript is required. The <strong>only required dependencies</strong> are:\n                    </p>\n                    <ul>\n                        <li><a href="http://angularjs.org" target="_blank">AngularJS</a> (minimal version 1.0.8)</li>\n                        <li><a href="http://getbootstrap.com" target="_blank">Bootstrap CSS</a> (tested with version ' +
((__t = ( bsversion )) == null ? '' : __t) +
').\n                            This version of the library (' +
((__t = ( pkg.version)) == null ? '' : __t) +
') works only with Bootstrap CSS in version 3.x.\n                            0.8.0 is the last version of this library that supports Bootstrap CSS in version 2.3.x.\n                        </li>\n                    </ul>\n                    <h3>Files to download</h3>\n                    <p>\n                        Build files for all directives are distributed in several flavours: minified for production usage, un-minified\n                        for development, with or without templates. All the options are described and can be\n                        <a href="https://github.com/angular-ui/bootstrap/tree/gh-pages">downloaded from here</a>.\n                    </p>\n                    <p>Alternativelly, if you are only interested in a subset of directives, you can\n                        <a ng-click="showBuildModal()">create your own build</a>.\n                    </p>\n                    <p>Whichever method you choose the good news that the overall size of a download is very small:\n                       &lt;20kB for all directives (~5kB with gzip compression!)</p>\n                    <h3>Installation</h3>\n                    <p>As soon as you\'ve got all the files downloaded and included in your page you just need to declare\n                       a dependency on the <code>ui.bootstrap</code> <a href="http://docs.angularjs.org/guide/module">module</a>:<br>\n                       <pre><code>angular.module(\'myModule\', [\'ui.bootstrap\']);</code></pre>\n                    </p>\n                    <p>You can fork one of the plunkers from this page to see a working example of what is described here.</p>\n                    <h3>CSS</h3>\n                    <p>Original Bootstrap\'s CSS depends on empty <code>href</code> attributes to style cursors for several components (pagination, tabs etc.).\n                    But in AngularJS adding empty <code>href</code> attributes to link tags will cause unwanted route changes. This is why we need to remove empty <code>href</code> attributes from directive templates and as a result styling is not applied correctly. The remedy is simple, just add the following styling to your application: <pre><code>.nav, .pagination, .carousel, .panel-title a { cursor: pointer; }</code></pre>\n                    </p>\n                </section>\n                ';
 demoModules.forEach(function(module) { ;
__p += '\n                    <section id="' +
((__t = ( module.name )) == null ? '' : __t) +
'">\n                        <div class="page-header">\n                          <h1>' +
((__t = ( module.displayName )) == null ? '' : __t) +
'<small>\n                              (<a target="_blank" href="https://github.com/angular-ui/bootstrap/tree/master/src/' +
((__t = ( module.name )) == null ? '' : __t) +
'">ui.bootstrap.' +
((__t = ( module.name )) == null ? '' : __t) +
'</a>)\n                          </small></h1>\n                          </div>\n                          <div class="row">\n                            <div class="col-md-6 show-grid">\n                                ' +
((__t = ( module.docs.html )) == null ? '' : __t) +
'\n                            </div>\n                            <div class="col-md-6">\n                                ' +
((__t = ( module.docs.md )) == null ? '' : __t) +
'\n                            </div>\n                        </div>\n                        <hr>\n                        <div class="row code">\n                            <div class="col-md-12" ng-controller="PlunkerCtrl">\n                                <div class="pull-right">\n                                    <button class="btn btn-info" id="plunk-btn" ng-click="edit(\'' +
((__t = ( ngversion)) == null ? '' : __t) +
'\', \'' +
((__t = ( bsversion )) == null ? '' : __t) +
'\', \'' +
((__t = ( pkg.version)) == null ? '' : __t) +
'\', \'' +
((__t = ( module.name )) == null ? '' : __t) +
'\')"><i class="glyphicon glyphicon-edit"></i> Edit in plunker</button>\n                                </div>\n                                <tabset>\n                                    <tab heading="Markup">\n                                        <div plunker-content="markup">\n                                            <pre ng-non-bindable><code data-language="html">' +
__e( module.docs.html ) +
'</code></pre>\n                                        </div>\n                                    </tab>\n                                    <tab heading="JavaScript">\n                                        <div plunker-content="javascript">\n                                            <pre ng-non-bindable><code data-language="javascript">' +
__e( module.docs.js ) +
'</code></pre>\n                                        </div>\n                                    </tab>\n                                </tabset>\n                            </div>\n                        </div>\n                    </section>\n                    <script>' +
((__t = ( module.docs.js )) == null ? '' : __t) +
'</script>\n                ';
 }); ;
__p += '\n            </div>\n        </div> \n    </div><!-- /.container -->\n</div><!-- /.main -->\n<footer class="footer">\n    <div class="container">\n        <p>Designed and built by <a href="https://github.com/angular-ui?tab=members" target="_blank">Angular-UI team</a> and <a href="https://github.com/angular-ui/bootstrap/graphs/contributors" target="_blank">contributors</a>.</p>\n        <p>Code licensed under <a href="https://github.com/angular-ui/bootstrap/blob/master/LICENSE">' +
((__t = ( pkg.license )) == null ? '' : __t) +
' License</a>.</p>\n        <p><a href="https://github.com/angular-ui/bootstrap/issues?state=open">Issues</a></p>\n    </div>\n</footer>\n<script src="assets/rainbow.js"></script>\n<script src="assets/rainbow-generic.js"></script>\n<script src="assets/rainbow-javascript.js"></script>\n<script src="assets/rainbow-html.js"></script>\n<script type="text/ng-template" id="downloadModal.html">\n    <div class="modal-header"><h4 class="modal-title">Download Angular UI Bootstrap</h4></div>\n    <div class="modal-body">\n        <form class="form-horizontal">\n          <div class="form-group">\n            <label class="col-sm-3 control-label"><strong>Build</strong></label>\n            <div class="col-sm-9">\n              <span class="btn-group">\n                <button type="button" class="btn btn-default" ng-model="options.minified" btn-radio="true">Minified</button>\n                <button type="button" class="btn btn-default" ng-model="options.minified" btn-radio="false">Uncompressed</button>\n              </span>\n              <small class="help-block">Use <b>Minified</b> version in your deployed application. <b>Uncompressed</b> source code is useful only for debugging and development purpose.</small>\n            </div>\n          </div>\n          <div class="form-group">\n            <label class="col-sm-3 control-label"><strong>Include Templates</strong></label>\n            <div class="col-sm-9">\n              <span class="btn-group">\n                <button type="button" class="btn btn-default" ng-model="options.tpls" btn-radio="true">Yes</button>\n                <button type="button" class="btn btn-default" ng-model="options.tpls" btn-radio="false">No</button>\n              </span>\n              <small class="help-block">Whether you want to include the <i>default templates</i>, bundled with most of the directives. These templates are based on Bootstrap\'s markup and CSS.</small>\n            </div>\n          </div>\n          <div class="form-group">\n            <label class="col-sm-3 control-label"><strong>Bower</strong></label>\n            <div class="col-sm-9">\n              <small>If you are using Bower just run:</small>\n              <pre>bower install angular-bootstrap</pre>\n              <small class="help-block"><a href="http://bower.io/" target="_blank">Bower</a> is a package manager for the web.</small>\n            </div>\n          </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <a class="btn btn-default" ng-click="cancel()">Cancel</a>\n        <a class="btn btn-primary" ng-click="download(\'' +
((__t = ( pkg.version)) == null ? '' : __t) +
'\')"><i class="glyphicon glyphicon-download-alt"></i> Download ' +
((__t = ( pkg.version )) == null ? '' : __t) +
'</a>\n    </div>\n</script>\n<script type="text/ng-template" id="buildModal.html">\n    <div class="modal-header">\n      <h4>\n      Create a Custom Build\n      <br>\n      <small>Select the modules you wish to download</small>\n      </h4>\n    </div>\n    <div class="modal-body">\n        <div ng-show="buildErrorText">\n            <h4 style="text-align: center;">{{buildErrorText}}</h4>\n        </div>\n        <div ng-hide="buildErrorText">\n            ';
 modules.forEach(function(module,i) { ;
__p += '\n              ';
 if (i % 3 === 0) {;
__p += '\n                <div class="btn-group" style="width: 100%;">\n              ';
 } ;
__p += '\n              <button type="button" class="btn btn-default" \n               style="width: 33%; border-radius: 0;"\n               ng-class="{\'btn-primary\': module.' +
((__t = ( module.name )) == null ? '' : __t) +
'}" \n               ng-model="module.' +
((__t = ( module.name )) == null ? '' : __t) +
'" \n               btn-checkbox \n               ng-change="selectedChanged(\'' +
((__t = ( module.name )) == null ? '' : __t) +
'\', module.' +
((__t = ( module.name )) == null ? '' : __t) +
')">\n                  ' +
((__t = ( module.displayName )) == null ? '' : __t) +
'\n              </button>\n              ';
 if ((i+1) % 3 === 0) { //end button group;
__p += '\n                </div>\n              ';
 } ;
__p += '\n            ';
 }); ;
__p += '\n        </div>\n    </div>\n    <div class="modal-footer">\n        <a class="btn btn-primary" ng-disabled="!selectedModules.length" ng-click="selectedModules.length && downloadBuild()">\n            <i class="glyphicon glyphicon-download-alt"></i> Download {{selectedModules.length}} Modules\n        </a>\n        <a class="btn" ng-click="cancel()">Cancel</a>\n    </div>\n</script>\n\n<script type="text/javascript">\n\n    var _gaq = _gaq || [];\n    _gaq.push([\'_setAccount\', \'UA-37467169-1\']);\n    _gaq.push([\'_trackPageview\']);\n\n    (function() {\n        var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n        ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n        var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n\n</script>\n<script src="assets/smoothscroll-angular-custom.js"></script>\n</body>\n</html>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/accordion/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="AccordionDemoCtrl">\n  <label class="checkbox">\n    <input type="checkbox" ng-model="oneAtATime">\n    Open only one at a time\n  </label>\n\n  <accordion close-others="oneAtATime">\n    <accordion-group heading="Static Header, initially expanded" is-open="true">\n      This content is straight in the template.\n    </accordion-group>\n    <accordion-group heading="{{group.title}}" ng-repeat="group in groups">\n      {{group.content}}\n    </accordion-group>\n    <accordion-group heading="Dynamic Body Content">\n      <p>The body of the accordion group grows to fit the contents</p>\n        <button class="btn btn-default btn-sm" ng-click="addItem()">Add Item</button>\n        <div ng-repeat="item in items">{{item}}</div>\n    </accordion-group>\n    <accordion-group is-open="isopen">\n        <accordion-heading>\n            I can have markup, too! <i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': isopen, \'glyphicon-chevron-right\': !isopen}"></i>\n        </accordion-heading>\n        This is just some content to illustrate fancy headings.\n    </accordion-group>\n  </accordion>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/alert/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="AlertDemoCtrl">\n  <alert ng-repeat="alert in alerts" type="alert.type" close="closeAlert($index)">{{alert.msg}}</alert>\n  <button class=\'btn btn-default\' ng-click="addAlert()">Add Alert</button>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/buttons/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="ButtonsCtrl">\n    <h4>Single toggle</h4>\n    <pre>{{singleModel}}</pre>\n    <button type="button" class="btn btn-primary" ng-model="singleModel" btn-checkbox btn-checkbox-true="1" btn-checkbox-false="0">\n        Single Toggle\n    </button>\n    <h4>Checkbox</h4>\n    <pre>{{checkModel}}</pre>\n    <div class="btn-group">\n        <button type="button" class="btn btn-primary" ng-model="checkModel.left" btn-checkbox>Left</button>\n        <button type="button" class="btn btn-primary" ng-model="checkModel.middle" btn-checkbox>Middle</button>\n        <button type="button" class="btn btn-primary" ng-model="checkModel.right" btn-checkbox>Right</button>\n    </div>\n    <h4>Radio</h4>\n    <pre>{{radioModel}}</pre>\n    <div class="btn-group">\n        <button type="button" class="btn btn-primary" ng-model="radioModel" btn-radio="\'Left\'">Left</button>\n        <button type="button" class="btn btn-primary" ng-model="radioModel" btn-radio="\'Middle\'">Middle</button>\n        <button type="button" class="btn btn-primary" ng-model="radioModel" btn-radio="\'Right\'">Right</button>\n    </div>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/carousel/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="CarouselDemoCtrl">\n  <div style="height: 305px">\n    <carousel interval="myInterval">\n      <slide ng-repeat="slide in slides" active="slide.active">\n        <img ng-src="{{slide.image}}" style="margin:auto;">\n        <div class="carousel-caption">\n          <h4>Slide {{$index}}</h4>\n          <p>{{slide.text}}</p>\n        </div>\n      </slide>\n    </carousel>\n  </div>\n  <div class="row">\n    <div class="col-md-6">\n      <a class="btn btn-info" ng-click="addSlide()">Add Slide</a>\n    </div>\n    <div class="col-md-6">\n      Interval, in milliseconds: <input type="number" class="form-control" ng-model="myInterval">\n      <br />Enter a negative number to stop the interval.\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/collapse/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="CollapseDemoCtrl">\n\t<button class="btn btn-default" ng-click="isCollapsed = !isCollapsed">Toggle collapse</button>\n\t<hr>\n\t<div collapse="isCollapsed">\n\t\t<div class="well well-lg">Some content</div> \n\t</div>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/datepicker/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="DatepickerDemoCtrl">\n    <pre>Selected date is: <em>{{dt | date:\'fullDate\' }}</em></pre>\n\n    <h4>Inline</h4>\n    <div style="display:inline-block; min-height:290px;">\n      <div class="well well-sm" ng-model="dt">\n          <datepicker min="minDate" show-weeks="showWeeks"></datepicker>\n      </div>\n    </div>\n\n    <h4>Popup</h4>\n    <div class="row">\n        <div class="col-md-6">\n            <p class="input-group">\n              <input type="text" class="form-control" datepicker-popup="{{format}}" ng-model="dt" is-open="opened" min="minDate" max="\'2015-06-22\'" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" />\n              <span class="input-group-btn">\n                <button class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>\n              </span>\n            </p>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6">\n            <label>Format:</label> <select class="form-control" ng-model="format" ng-options="f for f in formats"><option></option></select>\n        </div>\n    </div>\n\n    <hr />\n    <button class="btn btn-sm btn-info" ng-click="today()">Today</button>\n    <button class="btn btn-sm btn-default" ng-click="dt = \'2009-08-24\'">2009-08-24</button>\n    <button class="btn btn-sm btn-success" ng-click="toggleWeeks()" tooltip="For inline datepicker">Toggle Weeks</button>\n    <button class="btn btn-sm btn-danger" ng-click="clear()">Clear</button>\n    <button class="btn btn-sm btn-default" ng-click="toggleMin()" tooltip="After today restriction">Min date</button>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/dropdownToggle/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="dropdown" ng-controller="DropdownCtrl">\n  <a class="dropdown-toggle">\n    Click me for a dropdown, yo!\n  </a>\n  <ul class="dropdown-menu">\n    <li ng-repeat="choice in items">\n      <a>{{choice}}</a>\n    </li>\n  </ul>\n</li>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/modal/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="ModalDemoCtrl">\n    <script type="text/ng-template" id="myModalContent.html">\n        <div class="modal-header">\n            <h3>I\'m a modal!</h3>\n        </div>\n        <div class="modal-body">\n            <ul>\n                <li ng-repeat="item in items">\n                    <a ng-click="selected.item = item">{{ item }}</a>\n                </li>\n            </ul>\n            Selected: <b>{{ selected.item }}</b>\n        </div>\n        <div class="modal-footer">\n            <button class="btn btn-primary" ng-click="ok()">OK</button>\n            <button class="btn btn-warning" ng-click="cancel()">Cancel</button>\n        </div>\n    </script>\n\n    <button class="btn btn-default" ng-click="open()">Open me!</button>\n    <div ng-show="selected">Selection from a modal: {{ selected }}</div>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/pagination/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="PaginationDemoCtrl">\n    <h4>Default</h4>\n    <pagination total-items="totalItems" page="currentPage"></pagination>\n    <pagination boundary-links="true" total-items="totalItems" page="currentPage" class="pagination-sm" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></pagination>\n    <pagination direction-links="false" boundary-links="true" total-items="totalItems" page="currentPage"></pagination>\n    <pagination direction-links="false" total-items="totalItems" page="currentPage" num-pages="smallnumPages"></pagination>\n    <pre>The selected page no: {{currentPage}}</pre>\n    <button class="btn btn-info" ng-click="setPage(3)">Set current page to: 3</button>\n\n    <hr />\n    <h4>Pager</h4>\n    <pager total-items="totalItems" page="currentPage"></pager>\n\n    <hr />\n    <h4>Limit the maximum visible buttons</h4>\n    <pagination total-items="bigTotalItems" page="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-links="true"></pagination>\n    <pagination total-items="bigTotalItems" page="bigCurrentPage" max-size="maxSize" class="pagination-sm" boundary-links="true" rotate="false" num-pages="numPages"></pagination>\n    <pre>Page: {{bigCurrentPage}} / {{numPages}}</pre>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/popover/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="PopoverDemoCtrl">\n    <h4>Dynamic</h4>\n    <div class="form-group">\n      <label>Popup Text:</label>\n      <input type="text" ng-model="dynamicPopover" class="form-control">\n    </div>\n    <div class="form-group">\n      <label>Popup Title:</label>\n      <input type="text" ng-model="dynamicPopoverTitle" class="form-control">\n    </div>\n    <button popover="{{dynamicPopover}}" popover-title="{{dynamicPopoverTitle}}" class="btn btn-default">Dynamic Popover</button>\n    \n    <hr />\n    <h4>Positional</h4>\n    <button popover-placement="top" popover="On the Top!" class="btn btn-default">Top</button>\n    <button popover-placement="left" popover="On the Left!" class="btn btn-default">Left</button>\n    <button popover-placement="right" popover="On the Right!" class="btn btn-default">Right</button>\n    <button popover-placement="bottom" popover="On the Bottom!" class="btn btn-default">Bottom</button>\n    \n    <hr />\n    <h4>Triggers</h4>\n    <p>\n      <button popover="I appeared on mouse enter!" popover-trigger="mouseenter" class="btn btn-default">Mouseenter</button>\n    </p>\n    <input type="text" value="Click me!" popover="I appeared on focus! Click away and I\'ll vanish..."  popover-trigger="focus" class="form-control">\n\n    <hr />\n    <h4>Other</h4>\n    <button Popover-animation="true" popover="I fade in and out!" class="btn btn-default">fading</button>\n    <button popover="I have a title!" popover-title="The title." class="btn btn-default">title</button>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/position/test/test.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="en" ng-app="position">\n<head>\n    <meta charset="utf-8">\n    <script src="../../../misc/test-lib/angular.js"></script>\n    <script src="../position.js"></script>\n    <style type="text/css">\n        .container {\n            border: 1px solid red;\n        }\n\n        .container-relative {\n            border: 1px solid red;\n            position: relative;\n        }\n\n        .content {\n            border: 5px solid #808080;\n            background-color: dodgerblue;\n            width: 200px;\n        }\n\n        .positioned {\n            border: 5px solid #808080;\n            background-color: green;\n            position: absolute;\n        }\n    </style>\n    <script type="text/javascript">\n        angular.module(\'position\', [\'ui.bootstrap.position\']).directive(\'position\', function ($compile, $position) {\n            return {\n                link: function (scope, element, attrs) {\n\n                    var positionedEl = angular.element(\'<div class="positioned">Positioned</div>\');\n                    var elPosition = $position.position(element);\n                    elPosition.left += elPosition.width;\n\n                    positionedEl.css({left: elPosition.left + \'px\', top: elPosition.top + \'px\'});\n\n                    if (attrs[\'position\'] === \'body\') {\n                        angular.element(document.getElementsByTagName(\'body\')[0]).after($compile(positionedEl)(scope));\n                    } else {\n                        element.after($compile(positionedEl)(scope));\n                    }\n                }\n            };\n        });\n    </script>\n</head>\n<body class="container">\n<h3>Within body</h3>\n\n<div class="content" position>Content</div>\n\n<h3>Within statically positioned DIV</h3>\n\n<div class="container">\n    <div class="content" position>Content</div>\n</div>\n\n<h3>Within relative-positioned DIV - position specified in CSS</h3>\n\n<div class="container-relative">\n    <div class="content" position>Content</div>\n</div>\n\n<h3>Within relative-positioned DIV</h3>\n\n<div style="position: relative; left: 200px" class="container">\n    <div class="content" position>Content</div>\n</div>\n\n<h3>Within absolute-positioned DIV</h3>\n\n<div style="position: absolute; left: 400px; top: 400px" class="container">\n    <div class="content" position>Content - absolute</div>\n</div>\n\n<h3>Within overflowing absolute-positioned DIV</h3>\n<div class="container" style="height: 50px; overflow: scroll;overflow-x: hidden; position: absolute;">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non velit nulla. Suspendisse sit amet tempus diam. Sed at ultricies neque. Suspendisse id felis a sem placerat ornare. Donec auctor, purus at molestie tempor, arcu enim molestie lacus, ac imperdiet massa urna eu massa. Praesent velit tellus, scelerisque a fermentum ut, ornare in diam. Phasellus egestas molestie feugiat. Vivamus sit amet viverra metus.\n    <div class="content" position>Content absolute overflow</div>\n</div>\n\n<br>\n<br>\n<br>\n\n<h3>Next to a float element</h3>\n\n<div class="container">\n    <div class="content" style="float: right" position>Content</div>\n</div>\n\n<h3>Within a table</h3>\n<table class="container">\n    <tr>\n        <td>Some other content</td>\n        <td>\n            <div class="content" position>Content</div>\n        </td>\n    </tr>\n</table>\n\n<h3>Within a table that is inside a relative-positioned DIV</h3>\n\n<div style="position: relative; left: 200px" class="container">\n    <table class="container">\n        <tr>\n            <td>Some other content</td>\n            <td>\n                <div class="content" position>Content</div>\n            </td>\n        </tr>\n    </table>\n</div>\n\n<h3>Inside svg</h3>\n\n<svg height="300px" width="300px">\n  <rect x="0" y="0" height="300" width="300" fill="aliceblue"></rect>\n  <rect x="50" y="50" height="200" width="200" position="body" fill="white" stroke="red">\n  </rect>\n</svg>\n\n\n<h3>Inside looong text</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non velit nulla. Suspendisse sit amet tempus diam. Sed at ultricies neque. Suspendisse id felis a sem placerat ornare. Donec auctor, purus at molestie tempor, arcu enim molestie lacus, ac imperdiet massa urna eu massa. Praesent velit tellus, scelerisque a fermentum ut, ornare in diam. Phasellus egestas molestie feugiat. Vivamus sit amet viverra metus.</p>\n<p>Etiam ultricies odio commodo erat ullamcorper sodales. Nullam ac dui ac libero dictum mollis. Quisque convallis adipiscing facilisis. In nec nisi velit, id auctor lectus. Cras interdum urna non felis lacinia vulputate. Integer dignissim, mi aliquam gravida auctor, massa odio cursus lorem, eu ultrices eros nisl tempus diam. Maecenas tristique pellentesque nisi sed adipiscing. Aenean hendrerit sapien quis arcu lobortis vitae pulvinar ante volutpat. Morbi consectetur erat eu lacus facilisis eu ullamcorper orci euismod. Quisque diam dui, interdum in suscipit et, fringilla non justo. Pellentesque non nibh odio. Proin sit amet massa sem.</p>\n<p>Nam in urna erat, at congue nisi. Donec eu tellus lorem, sed facilisis tellus. Aliquam suscipit faucibus ipsum, at hendrerit metus interdum at. Integer et eros ac lacus vulputate sagittis quis quis erat. Suspendisse consectetur vehicula purus vitae imperdiet. Suspendisse in augue magna, quis imperdiet enim. Nullam non diam ac erat auctor bibendum. Praesent ante mauris, egestas sit amet molestie sed, tristique at lorem. Nam at mi ac nisl venenatis semper nec eget mi. Pellentesque a lectus ac leo feugiat suscipit. Quisque tristique dui nec urna placerat a viverra mi iaculis. Ut et tellus et turpis sagittis iaculis nec eu magna. Sed quis nunc non arcu tincidunt ultricies viverra id mauris.</p>\n<p>Curabitur luctus rutrum ultricies. Aenean ut rutrum orci. Sed molestie lorem in leo cursus id feugiat nisi scelerisque. Maecenas pulvinar neque nec lacus feugiat dictum. Donec viverra felis nec nisi mollis feugiat. Phasellus vehicula, ligula at mattis porttitor, sapien urna hendrerit quam, at fringilla nisl quam vel elit. In eu lacus ligula. Praesent eget gravida nisl. Suspendisse velit diam, pellentesque a tempus quis, vestibulum vel leo.</p>\n<p>Maecenas feugiat ultrices laoreet. Sed congue posuere diam ac faucibus. Pellentesque eget leo ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nec quam eu tellus sagittis cursus a sit amet eros. Mauris sit amet orci at orci vulputate commodo ut ut nunc. Etiam sagittis erat ut nisi ultricies feugiat. Morbi sed eros nisi. Cras vitae augue in risus aliquet commodo non id est.</p>\n<div class="content" position>HERE</div>\n<p>Maecenas laoreet nisi pretium elit bibendum eget tempor nunc aliquet. Vivamus interdum nisi sit amet tortor fermentum congue. Suspendisse at posuere erat. Aliquam hendrerit ultricies nunc non adipiscing. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis molestie viverra nulla a aliquet. Nullam non eros vel sem vehicula suscipit. Ut sit amet arcu ac tortor dignissim viverra in a ligula.</p>\n\n\n<div style="position: fixed; bottom: 0" class="container">\n    <h3>Within fixed div</h3>\n    <div class="content" position>Content</div>\n</div>\n\n\n</body>\n</html>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/progressbar/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="ProgressDemoCtrl">\n\n    <h3>Static</h3>\n    <div class="row">\n        <div class="col-sm-4"><progressbar value="55"></progressbar></div>\n        <div class="col-sm-4"><progressbar class="progress-striped" value="22" type="warning">22%</progressbar></div>\n        <div class="col-sm-4"><progressbar class="progress-striped active" max="200" value="166" type="danger"><i>166 / 200</i></progressbar></div>\n    </div>\n\n    <hr />\n    <h3>Dynamic <button class="btn btn-sm btn-primary" type="button" ng-click="random()">Randomize</button></h3>\n    <progressbar max="max" value="dynamic"><span style="color:black; white-space:nowrap;">{{dynamic}} / {{max}}</span></progressbar>\n    \n    <small><em>No animation</em></small>\n    <progressbar animate="false" value="dynamic" type="success"><b>{{dynamic}}%</b></progressbar>\n\n    <small><em>Object (changes type based on value)</em></small>\n    <progressbar class="progress-striped active" value="dynamic" type="{{type}}">{{type}} <i ng-show="showWarning">!!! Watch out !!!</i></progressbar>\n    \n    <hr />\n    <h3>Stacked <button class="btn btn-sm btn-primary" type="button" ng-click="randomStacked()">Randomize</button></h3>\n    <progress><bar ng-repeat="bar in stacked" value="bar.value" type="{{bar.type}}"><span ng-hide="bar.value < 5">{{bar.value}}%</span></bar></progress>\n\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/rating/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="RatingDemoCtrl">\n    <h4>Default</h4>\n    <rating value="rate" max="max" readonly="isReadonly" on-hover="hoveringOver(value)" on-leave="overStar = null"></rating>\n    <span class="label" ng-class="{\'label-warning\': percent<30, \'label-info\': percent>=30 && percent<70, \'label-success\': percent>=70}" ng-show="overStar && !isReadonly">{{percent}}%</span>\n\n    <pre style="margin:15px 0;">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || "none"}}</b></pre>\n\n    <button class="btn btn-sm btn-danger" ng-click="rate = 0" ng-disabled="isReadonly">Clear</button>\n    <button class="btn btn-sm btn-default" ng-click="isReadonly = ! isReadonly">Toggle Readonly</button>\n    <hr />\n\n    <h4>Custom icons</h4>\n    <div ng-init="x = 5"><rating value="x" max="15" state-on="\'glyphicon-ok-sign\'" state-off="\'glyphicon-ok-circle\'"></rating> <b>(<i>Rate:</i> {{x}})</b></div>\n    <div ng-init="y = 2"><rating value="y" rating-states="ratingStates"></rating> <b>(<i>Rate:</i> {{y}})</b></div>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/tabs/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="TabsDemoCtrl">\n  <p>Select a tab by setting active binding to true:</p>\n  <p>\n    <button class="btn btn-default btn-sm" ng-click="tabs[0].active = true">Select second tab</button>\n    <button class="btn btn-default btn-sm" ng-click="tabs[1].active = true">Select third tab</button>\n  </p>\n  <p>\n    <button class="btn btn-default btn-sm" ng-click="tabs[1].disabled = ! tabs[1].disabled">Enable / Disable third tab</button>\n  </p>\n  <hr />\n\n  <tabset>\n    <tab heading="Static title">Static content</tab>\n    <tab ng-repeat="tab in tabs" heading="{{tab.title}}" active="tab.active" disabled="tab.disabled">\n      {{tab.content}}\n    </tab>\n    <tab select="alertMe()">\n      <tab-heading>\n        <i class="glyphicon glyphicon-bell"></i> Alert!\n      </tab-heading>\n      I\'ve got an HTML heading, and a select callback. Pretty cool!\n    </tab>\n  </tabset>\n\n  <hr />\n\n  <tabset vertical="true" type="navType">\n    <tab heading="Vertical 1">Vertical content 1</tab>\n    <tab heading="Vertical 2">Vertical content 2</tab>\n  </tabset>\n\n  <hr />\n\n  <tabset justified="true">\n    <tab heading="Justified">Justified content</tab>\n    <tab heading="SJ">Short Labeled Justified content</tab>\n    <tab heading="Long Justified">Long Labeled Justified content</tab>\n  </tabset>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/timepicker/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="TimepickerDemoCtrl">\n\n  <div ng-model="mytime" ng-change="changed()" style="display:inline-block;">\n        <timepicker hour-step="hstep" minute-step="mstep" show-meridian="ismeridian"></timepicker>\n  </div>\n\n\n   <pre class="alert alert-info">Time is: {{mytime | date:\'shortTime\' }}</pre>\n\n  <div class="row"> \n    <div class="col-xs-6">\n        Hours step is:\n      <select class="form-control" ng-model="hstep" ng-options="opt for opt in options.hstep"></select>\n    </div>\n    <div class="col-xs-6">\n        Minutes step is:\n      <select class="form-control" ng-model="mstep" ng-options="opt for opt in options.mstep"></select>\n    </div>\n  </div>\n\n  <hr>\n\n  <button class="btn btn-info" ng-click="toggleMode()">12H / 24H</button>\n  <button class="btn btn-default" ng-click="update()">Set to 14:00</button>\n  <button class="btn btn-danger" ng-click="clear()">Clear</button>\n\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/tooltip/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="TooltipDemoCtrl">\n    <div class="form-group">\n      <label>Dynamic Tooltip Text</label>\n      <input type="text" ng-model="dynamicTooltipText" class="form-control">\n    </div>\n    <div class="form-group">\n      <label>Dynamic Tooltip Popup Text</label>\n      <input type="text" ng-model="dynamicTooltip" class="form-control">\n    </div>\n    <p>\n      Pellentesque <a href="#" tooltip="{{dynamicTooltip}}">{{dynamicTooltipText}}</a>,\n      sit amet venenatis urna cursus eget nunc scelerisque viverra mauris, in\n      aliquam. Tincidunt lobortis feugiat vivamus at \n      <a href="#" tooltip-placement="left" tooltip="On the Left!">left</a> eget\n      arcu dictum varius duis at consectetur lorem. Vitae elementum curabitur\n      <a href="#" tooltip-placement="right" tooltip="On the Right!">right</a> \n      nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas \n      <a href="#" tooltip-placement="bottom" tooltip="On the Bottom!">bottom</a> \n      pharetra convallis posuere morbi leo urna, \n      <a href="#" tooltip-animation="false" tooltip="I don\'t fade. :-(">fading</a>\n      at elementum eu, facilisis sed odio morbi quis commodo odio. In cursus\n      <a href="#" tooltip-popup-delay=\'1000\' tooltip=\'appears with delay\'>delayed</a> turpis massa tincidunt dui ut.\n    </p>\n\n    <p>\n      I can even contain HTML. <a href="#" tooltip-html-unsafe="{{htmlTooltip}}">Check me out!</a>\n    </p>\n\n    <form role="form">\n      <div class="form-group">\n        <label>Or use custom triggers, like focus: </label>\n        <input type="text" value="Click me!" tooltip="See? Now click away..."  tooltip-trigger="focus" tooltip-placement="right" class="form-control" />\n      </div>\n    </form>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/src/typeahead/docs/demo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/ng-template" id="customTemplate.html">\n  <a>\n      <img ng-src="http://upload.wikimedia.org/wikipedia/commons/thumb/{{match.model.flag}}" width="16">\n      <span bind-html-unsafe="match.label | typeaheadHighlight:query"></span>\n  </a>\n</script>\n<div class=\'container-fluid\' ng-controller="TypeaheadCtrl">\n\n    <h4>Static arrays</h4>\n    <pre>Model: {{selected | json}}</pre>\n    <input type="text" ng-model="selected" typeahead="state for state in states | filter:$viewValue | limitTo:8" class="form-control">\n\n    <h4>Asynchronous results</h4>\n    <pre>Model: {{asyncSelected | json}}</pre>\n    <input type="text" ng-model="asyncSelected" placeholder="Locations loaded via $http" typeahead="address for address in getLocation($viewValue) | filter:$viewValue" typeahead-loading="loadingLocations" class="form-control">\n    <i ng-show="loadingLocations" class="glyphicon glyphicon-refresh"></i>\n\n    <h4>Custom templates for results</h4>\n    <pre>Model: {{customSelected | json}}</pre>\n    <input type="text" ng-model="customSelected" placeholder="Custom template" typeahead="state as state.name for state in statesWithFlags | filter:{name:$viewValue}" typeahead-template-url="customTemplate.html" class="form-control">\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/accordion/accordion-group.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n\t  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/accordion/accordion.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel-group" ng-transclude></div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/alert/alert.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'alert\' ng-class=\'"alert-" + (type || "warning")\'>\n    <button ng-show=\'closeable\' type=\'button\' class=\'close\' ng-click=\'close()\'>&times;</button>\n    <div ng-transclude></div>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/carousel/carousel.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/carousel/slide.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-class="{\n    \'active\': leaving || (active && !entering),\n    \'prev\': (next || active) && direction==\'prev\',\n    \'next\': (next || active) && direction==\'next\',\n    \'right\': direction==\'prev\',\n    \'left\': direction==\'next\'\n  }" class="item text-center" ng-transclude></div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/datepicker/datepicker.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table>\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr ng-show="labels.length > 0" class="h6">\n      <th ng-show="showWeekNumbers" class="text-center">#</th>\n      <th ng-repeat="label in labels" class="text-center">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/datepicker/popup.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n\t<li ng-transclude></li>\n\t<li ng-show="showButtonBar" style="padding:10px 9px 2px">\n\t\t<span class="btn-group">\n\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="today()">{{currentText}}</button>\n\t\t\t<button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button>\n\t\t</span>\n\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n\t</li>\n</ul>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/modal/backdrop.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/modal/window.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n</div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/pagination/pager.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="pager">\n  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/pagination/pagination.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/popover/popover.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/progressbar/bar.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/progressbar/progress.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="progress" ng-transclude></div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/progressbar/progressbar.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/rating/rating.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span ng-mouseleave="reset()">\n    <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i>\n</span>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/tabs/tab.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/tabs/tabset.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="tabbable">\n  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/timepicker/timepicker.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table>\n\t<tbody>\n\t\t<tr class="text-center">\n\t\t\t<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n\t\t\t<td ng-show="showMeridian"></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n\t\t\t\t<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n\t\t\t</td>\n\t\t\t<td>:</td>\n\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n\t\t\t\t<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n\t\t\t</td>\n\t\t\t<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n\t\t</tr>\n\t\t<tr class="text-center">\n\t\t\t<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n\t\t\t<td ng-show="showMeridian"></td>\n\t\t</tr>\n\t</tbody>\n</table>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/tooltip/tooltip-html-unsafe-popup.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/tooltip/tooltip-popup.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/typeahead/typeahead-match.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>';

}
return __p
};

this["JST"]["assets/bower_components/ui-bootstrap/template/typeahead/typeahead-popup.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>';

}
return __p
};

this["JST"]["assets/views/cam.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page container-fluid container-swipe full-height">\n    <div class="col-sm-3 col-swipe full-height">\n        <div class="row full-height">\n            <div id="camera-list" class="col-xs-12 full-height scroll scroll-y p-top">\n                <input type="text" id="camera-list-search" class="form-control" role="search" ng-model="camSearch">\n                <ul class="list list-widgets">\n                    <li ng-repeat="cam in cams | filter: camSearch " ng-click="$parent.selectedCam = cam" ng-class="{active: selectedCam.id === cam.id}" class="widget widget-white a widget-content gutter-top">\n                        <img ng-src="/images/cameras/{{cam.id}}.png" alt="" class="header-image">\n                        <h5 class="searchable caps" ng-bind-html="\'{{cam.name}}\' | highlight:camSearch:false"></h5>\n                    </li>  \n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="col-sm-9 col-swipe full-height full-height scroll scroll-y p-top">\n        <div id="camera-details" class="widget widget-white" ng-show="selectedCam">\n            <div class="container-fluid p-bottom">\n                <div class="container-fluid">\n                    <h3 id="camera-details-title" class="caps"></h3>\n                </div>\n                <div class="col-lg-9 col-md-8 gutter-bottom">\n                    <div id="camera-shot" class="map-container">\n                        <img ng-show="selectedCam" ng-src="/images/cameras/{{selectedCam.id}}.png" alt="" class="header-image">\n                        <s-heatmap data="heatmap" ng-show="heatmap"></s-heatmap>\n                        <s-flowmap data="flowmap" ng-show="flowmap"></s-flowmap>\n                    </div>\n                    <div class="container-fluid">\n                        <div class="row">\n                            <ul id="camera-timeline" class="timeline well">\n                                <li ng-repeat="value in timeline.data track by $index" class="timeline-item" tooltip="{{$index}}:00" tooltip-append-to-body="true" tooltip-placement="bottom" ng-click="setHour($index)" ng-class="{active: mapQuery.hour === $index}">\n                                    <div class="timeline-bar" style="height: {{10 + (value / timeline.max) *100}}%" ></div>\n                                </li>    \n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-3 col-md-4">\n                    <div id="camera-control" class="row clearfix" role="form">\n                        <div class="col-sm-4 col-md-12">\n                            <div class="form-group">\n                            <input type="radio" name="mapType" ng-model="mapQuery.type" value="heat" id ="cam-maptype-heat">\n                                <label class="radio-inline" for="cam-maptype-heat">Heatmap</label>\n                            <input type="radio" name="mapType" ng-model="mapQuery.type" value="flow" id ="cam-maptype-flow"> \n                                <label class="radio-inline"  for="cam-maptype-flow">Flowmap</label>\n                            </div>\n                        </div>\n                        <div class="col-sm-4 col-md-12">\n                            <div class="form-group well">\n                                <datepicker class="datepicker" show-weeks="false" ng-model="mapQuery.date"></datepicker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/views/dashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page container">\n   <h1 class="big-text stamped text-center"> No Widgets Awailable</h1>\n</div> \n            ';

}
return __p
};

this["JST"]["assets/views/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += ' <div class="page container" ng-animate>\n    <div id="login-box" class="center-block form" style="margin-top:10%; width:300px;">\n    \t\n        <h4 class="caps block text-primary">Welcome</h4>\n        <form ng-submit ="login()" >\n            <div class="form-group">\n                <input type="email" id="login-email" class="form-control email" ng-model="credentials.email" ui-keypress="{\'enter\':\'login()\'}" placeholder="Email">\n                <input type="password" id="login-password" class="form-control password" ng-model="credentials.password" placeholder="Password">\n                <button id="login-submit" class="btn btn-block btn-primary" type="submit">Go!</button>\n                <a href="" id="forgot-password-link" class="text-center col-xs-12" style="display:none;">Forgot your password?</a>\n                <h4 class="text-center text-danger col-xs-12">{{loginError}}</h4>\n            </div>\n        </form>\n    </div>\n</div>\n';

}
return __p
};