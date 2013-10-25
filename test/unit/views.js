'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AngAppTest', function () {
    beforeEach(function () {
        browser().navigateTo('../../app/index.html');
    });

    it('should automatically redirect to /list when location hash/fragment is empty', function () {
        expect(browser().location().url()).toBe("/main");
    });

    describe('list', function () {
        beforeEach(function () {
            browser().navigateTo('#/list');
        });
        it('should render list view when user navigates to /list', function () {
            expect(element('[ng-view] tr').count()).toEqual(6);
            expect(browser().location().url()).toBe("/list");
        });
    });
});
