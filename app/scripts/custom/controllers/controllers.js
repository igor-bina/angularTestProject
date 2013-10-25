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
        $scope.visibleTable = $scope.menuItems.length == 0;

        $scope.delete = function (id) {
            var editItemId = $scope.menuItems.map(function (item) {
                return item.id;
            }).indexOf(id);

            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData.splice(editItemId, 1);
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }

            $scope.menuItems.splice(editItemId, 1);
        };
    }]);

    app.controller('NewCtrl', ['$scope', function ($scope) {
        $scope.newItem = {
            id: "",
            carName: "",
            amount: "",
            desc: ""
        };
        $scope.validate = {
            id: { types: 'required number', message: 'incorrect id' },
            carName: { types: 'required', message: 'incorrect car name' },
            amount: { types: 'required number', message: 'incorrect amount' },
            desc: { types: 'required', message: 'incorrect desc' }
        };
        $scope.save = function () {
            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData.push($scope.newItem);
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }
        };
        $scope.isValid = true;
    }]);

    app.controller('EditCtrl', ['$scope', '$routeParams', '$location', 'fnGetData', function ($scope, $routeParams, $location, fnGetData) {
        var dataForList = fnGetData();
        var editItemId = dataForList.map(function (item) {
            return item.id;
        }).indexOf($routeParams.id);
        $scope.editItem = dataForList[editItemId];
        $scope.save = function () {
            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData[editItemId].id = $scope.editItem.id;
                publicData[editItemId].carName = $scope.editItem.carName;
                publicData[editItemId].amount = $scope.editItem.amount;
                publicData[editItemId].desc = $scope.editItem.desc;
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }
        };
    }]);

    app.controller('AddCtrl', ['$scope', function ($scope) {
        $scope.newItem = {
            id: "",
            carName: "",
            amount: "",
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
    }]);
})();