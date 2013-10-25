'use strict';

describe('MenuCtrl', function () {
    var ctrl, scope;

    //beforeEach(module('AngAppTest'));

    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MenuCtrl', { $scope: scope });
    }));

    it("has repeats attribute set to 5", function () {
        expect(scope.repeats).toBe(5);
    });
});

describe('ListCtrl', function () {
    beforeEach(function () {
    });

    it('test ListCtrl', function () {
        controller('MenuCtrl', { $scope: {}, dataForList: {} });
    });
});

describe('NewCtrl', function () {
    var newCtrl;

    beforeEach(function () {
        newCtrl = new NewCtrl({});
    });

    it('test NewCtrl', function () {
        controller('MenuCtrl', { $scope: {} });
    });
});

describe('EditCtrl', function () {
    var editCtrl;

    beforeEach(function () {
        editCtrl = new EditCtrl({}, {}, {}, []);
    });

    it('test EditCtrl', function () {
        controller('MenuCtrl', { $scope: {} });
    });
});

describe('AddCtrl', function () {
    var addCtrl;

    beforeEach(function () {
        addCtrl = new AddCtrl({});
    });

    it('test AddCtrl', function () {
        controller('MenuCtrl', { $scope: {} });
    });
});

describe('MainCtrl', function () {
    var mainCtrl;

    beforeEach(function () {
        mainCtrl = new MainCtrl({});
    });

    it('test MainCtrl', function () {
        controller('MenuCtrl', { $scope: {} });
    });
});

describe('MenuCtrl controller', function () {
    var scope, rootScope, dialog, routeParams, controller, places;

    beforeEach(function () {
        module('personalmaps', function ($provide) {
            $provide.value('lang', '');
        });

        inject(function ($rootScope, $controller, $routeParams, $dialog, lang) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            dialog = $dialog;
            routeParams = $routeParams;
            controller = $controller;

            dialog = {
                messageBox: function () {
                }
            };
            spyOn(dialog, 'messageBox').andReturn({
                open: function () {
                    return {
                        then: function () {
                        }
                    };
                }
            });

            places = jasmine.createSpyObj('Places', ['getAll', 'get', 'add', 'update', 'delete', 'save']);
        });
    });

    it('should call getAll', function () {
        controller('MenuCtrl', { $scope: scope, $rootScope: rootScope, 'Places': places, $routeParams: routeParams, $dialog: dialog });
        expect(places.getAll).toHaveBeenCalled();
    });

    it('should call getAll on places:updated event', function () {
        controller('PlacesListController', { $scope: scope, $rootScope: rootScope, 'Places': places, $routeParams: routeParams, $dialog: dialog });
        rootScope.$emit('places:updated');
        expect(places.getAll.calls.length).toEqual(2);
    });

    it('should open dialog on confirm call', function () {
        controller('PlacesListController', { $scope: scope, $rootScope: rootScope, 'Places': places, $routeParams: routeParams, $dialog: dialog });
        scope.confirm();
        expect(dialog.messageBox).toHaveBeenCalled();
    });
});