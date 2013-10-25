﻿(function () {
    'use strict';

    app.controller('MenuCtrl', function ($scope) {
//        angular.extend($scope, Models.MenuCtrl);
        
        $scope.container = $('[ng-controller="Controllers.MenuCtrl"]');
        $scope.name1 = "name11111";
        $scope.menuItems = [
            { id: "list", text: "list items", link: "#/list", active: "active" },
            { id: "new", text: "new item", link: "#/new" },
            { id: "main", text: "main info", link: "#/main" }
        ];

        var selectedMenu = 0;

        $scope.event = {
            menuClick: function (data) {
                $scope.menuItems[selectedMenu].active = "";
                selectedMenu = $scope.menuItems.indexOf(data.item);
                $scope.menuItems[selectedMenu].active = "active";
            }
        };
    });

    app.controller('ListCtrl', function ($scope, dataForList) {
        $scope.menuItems = dataForList;
    });

    app.controller('NewCtrl', function ($scope) {
        $scope.newItem = { id: "", name: "", surName: "", desc: "" };
        $scope.save = function () {
            publicData.items.push($scope.newItem);
        };
    });

    app.controller('EditCtrl', function ($scope, $routeParams, $location, dataForList) {
        var editItemId = dataForList.map(function (item) {
            return item.id;
        }).indexOf(+$routeParams.id);
        $scope.editItem = dataForList[editItemId];
        $scope.save = function () {
            publicData.items[editItemId].id = $scope.editItem.id;
            publicData.items[editItemId].name = $scope.editItem.name;
            publicData.items[editItemId].surname = $scope.editItem.surname;
            publicData.items[editItemId].desc = $scope.editItem.desc;
        };
    });

    app.controller('AddCtrl', function ($scope) {
        $scope.newItem = { id: "", name: "", surName: "", desc: "" };
        $scope.save = function () {
            publicData.items.push($scope.newItem);
        };
    });

    app.controller('MainCtrl', function ($scope) {
        $scope.name = "hello";
    });
})();