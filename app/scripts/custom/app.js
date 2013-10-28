var app = null;

(function () {
    'use strict';

    app = angular.module('AngAppTest', ['ngResource', 'AngAppTest.Filters'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/list', { template: 'views/list.html', controller: "ListCtrl" })
                    .when('/new', { template: 'views/new.html', controller: "AddCtrl" })
                    .when('/edit/:id', { template: 'views/edit.html', controller: "EditCtrl" })
                    .when('/main', { template: 'views/main.html', controller: "MainCtrl" })
                    .when('/add', { template: 'views/add.html', controller: "AddCtrl" })
                    .otherwise({ redirectTo: '/list' });
        }
        ]);
})();