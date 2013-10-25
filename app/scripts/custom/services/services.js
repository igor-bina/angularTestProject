(function () {
    'use strict';

    angular.module('AngAppTest.Services', ['ngResource'], function ($provide) {
        $provide.factory('fnGetData', function () {
            return function () {
                var publicData = [];
                
                if (localStorage) {
                    publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                }

                return publicData;
            };
        });
    });
})();