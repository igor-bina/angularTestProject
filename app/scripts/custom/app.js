//var publicData = null;
var app = null;

(function () {
    'use strict';

    //publicData = {
    //    items: [
    //        { "id": 1, "name": "name1", "surname": "surname1", "desc": "fgh jghjakjsd asd hdkasdkas fj kljk k6ryuh" },
    //        { "id": 2, "name": "name2", "surname": "surname2", "desc": " ghjk hjgfg fgh jghjakjsd asd hdkasdkas fj kljk k6ryuh" },
    //        { "id": 3, "name": "name3", "surname": "surname3", "desc": "sdf gsd gdfsfgh jghkjsd asd hdkasdkas fj kljk k6ryuh" },
    //        { "id": 4, "name": "name4", "surname": "surname4", "desc": "fgh jghjakjsd asd hdkasdkas fj kljk k6ryuh" },
    //        { "id": 5, "name": "name5", "surname": "surname5", "desc": " dfghgkhjfg jhk j ghjakj sghdj gahsd  ggh dka sdkas fj kljk k6ryuh" }
    //    ]
    //};

    app = angular.module('AngAppTest', ['AngAppTest.Services', 'AngAppTest.Filters'])
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