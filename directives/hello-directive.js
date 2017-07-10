angular.module('app')
    .directive('hello', function() {
        return function(scope, element) {
            element.text('hello');
        };
    });