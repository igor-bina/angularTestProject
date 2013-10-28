(function () {
    'use strict';

    app.factory('listService', ['$resource', function ($resource) {
        var service = $resource('testData/dataForList.html/:id',
                  { /*  id: "@id"  */ }, //parameters default
                  {
                      getItem: { method: "GET" },
                      addItem: { method: "POST" },
                      updateItem: { method: "POST" },
                      deleteItem: { method: "POST" },
                  });

        return service;
    }]);

    app.factory('fnGetData', function () {
        return function () {
            return localStorage && JSON.parse(localStorage.getItem('publicData') || '[]');;
        };
    });
})();