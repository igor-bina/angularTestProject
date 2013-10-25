var Models = function () {
    var selectedMenu = 0;

    return {
        MenuCtrl: {
            container: $('[ng-controller="Controllers.MenuCtrl"]'),
            name1: "name11111",
            menuItems: [
                { id: "list", text: "list items", link: "#/list", active: "active" },
                { id: "new", text: "new item", link: "#/new" },
                { id: "main", text: "main info", link: "#/main" }
            ],
            selectedMenu: 0,
            event: {
                menuClick: function (data) {
                    this.menuItems[selectedMenu].active = "";
                    selectedMenu = $scope.menuItems.indexOf(data.item);
                    this.menuItems[selectedMenu].active = "active";
                }
            }
        }
    };
}();