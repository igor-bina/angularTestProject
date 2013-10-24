'use strict';

angular.module('AngAppFirst.Services', ['ngResource'])
	.factory('dataForList', function () {
	    var resultData = null;
	    
	    $.ajax({
	        dataType: "json",
	        url: "data/dataForList.html",
	        async: false,
	        success: function (data) {
	            resultData = data;
	        }
	    });
	    
	    return publicData.items;
	});