﻿(function () {
    'use strict';

    angular.module('AngAppTest.Filters', [])
        .filter('list', function () {
            return function (list, value) {
                if (!value) {
                    return list;
                }

                return list.map(function (item) {
                    if (item.name.indexOf(value) > -1) {
                        return item;
                    }
                });
            };
        });
})();