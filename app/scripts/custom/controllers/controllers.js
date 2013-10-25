(function () {
    'use strict';

    app.controller('MenuCtrl', ['$scope', function ($scope) {
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
    }]);

    app.controller('ListCtrl', ['$scope', 'fnGetData', function ($scope, fnGetData) {
        $scope.menuItems = fnGetData();
    }]);

    app.controller('NewCtrl', ['$scope', function ($scope) {
        $scope.newItem = {
            id: "",
            name: "",
            surName: "",
            desc: ""
        };
        $scope.save = function () {
            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData.push($scope.newItem);
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }
        };
    }]);

    app.controller('EditCtrl', ['$scope', '$routeParams', '$location', 'fnGetData', function ($scope, $routeParams, $location, fnGetData) {
        var dataForList = fnGetData();
        var editItemId = dataForList.map(function (item) {
            return item.id;
        }).indexOf(+$routeParams.id);
        $scope.editItem = dataForList[editItemId];
        $scope.save = function () {
            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData[editItemId].id = $scope.editItem.id;
                publicData[editItemId].name = $scope.editItem.name;
                publicData[editItemId].surname = $scope.editItem.surname;
                publicData[editItemId].desc = $scope.editItem.desc;
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }
        };
    }]);

    app.controller('AddCtrl', ['$scope', function ($scope) {
        $scope.newItem = {
            id: "",
            name: "",
            surName: "",
            desc: ""
        };
        $scope.save = function () {
            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData.push($scope.newItem);
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }
        };
    }]);

    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.name = "hello";
    }]);
})();