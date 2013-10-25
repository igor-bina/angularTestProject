(function () {
    var validate = {
        required: function (value) {
            if (value.length == 0) {
                return false;
            }

            return true;
        },
        number: function (value) {
            return /^\d+$/.test(value);
        }
    };

    app.directive('customValidate', function () {
        return {
            link: function ($scope, element, attrs) {
                var isTest = false;

                $scope.$watch(attrs.ngModel, function (value) {
                    if (isTest) {
                        var types = attrs.customValidate.split(' ');

                        for (var i = 0; i < types.length; i++) {
                            $scope.isValid = validate[types[i]](value);
                            $scope.isValid && ($scope.message = $scope.validate[attrs.customValidateModel].message);
                        }
                    }
                    
                    isTest = true;
                });
            }
        };
    });

})();
