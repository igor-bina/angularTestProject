(function () {
    'use strict';

    app.controller('CommonCtrl', ['$scope', function ($scope) {
        $scope.menu = {
            selectedMenu: 0,
            menuItems: [
             { id: "list", text: "list items", link: "#/list", active: "active" },
             { id: "new", text: "new item", link: "#/new" },
             { id: "main", text: "main info", link: "#/main" }
            ],
            setMenu: function (type) {
                this.menuItems.filter(function (item) {
                    return item.active == 'active';
                })[0].active = '';

                var selectedMenu = this.menuItems.filter(function (item) {
                    return item.id == type;
                })[0];
                
                this.selectedMenu = this.menuItems.indexOf(selectedMenu);
                selectedMenu.active = 'active';
            },
            event: {
                menuClick: function (data) {
                    var self = $scope.menu;
                    self.menuItems[self.selectedMenu].active = "";
                    self.selectedMenu = self.menuItems.indexOf(data.item);
                    self.menuItems[self.selectedMenu].active = "active";
                }
            }
        };
    }]);

    app.controller('ListCtrl', ['$scope', 'fnGetData', 'listService', function ($scope, fnGetData, listService) {
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

                $scope.visibleTable = publicData.length == 0;
            }

            $scope.menuItems.splice(editItemId, 1);
        };
    }]);

    app.controller('NewCtrl', ['$scope', function ($scope) {
        $scope.$parent.menu.setMenu('new');

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

    app.controller('AddCtrl', ['$scope', 'listService', function ($scope, listService) {
        $scope.newItem = {
            id: "123",
            carName: "wer",
            amount: "32",
            desc: "werer"
        };
        $scope.save = function() {
            if (localStorage) {
                var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                publicData.push($scope.newItem);
                localStorage.setItem('publicData', JSON.stringify(publicData));
            }
        };

        listService.getItem(function (data) {
            var testData = data.items;
        });
        listService.addItem($scope.newItem);
    }]);

    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.$parent.menu.setMenu('main');
    }]);
})();