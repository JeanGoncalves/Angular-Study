angular.module('app')
    .directive('welcomeMessage', function() {
        return function(scope, element, attrs) {
            var result = scope.$eval(attrs.welcomeMessage);
            element.text(result);
        };
    });