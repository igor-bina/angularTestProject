'use strict';

angular.module('AngAppTest.Services', ['ngResource'])
	.factory('dataForList', function () {
	    return publicData.items;
	});