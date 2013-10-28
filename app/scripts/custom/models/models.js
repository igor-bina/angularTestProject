var Models = function () {
    return {
        AddCtrl: {
            item: "content",
            newItem: {
                id: "",
                carName: "",
                amount: "",
                desc: ""
            },
            save: function () {
                if (localStorage) {
                    var publicData = JSON.parse(localStorage.getItem('publicData') || '[]');
                    publicData.push($scope.newItem);
                    localStorage.setItem('publicData', JSON.stringify(publicData));
                }
            }
        }
    };
}();
