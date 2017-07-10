angular.module('app')
    .directive('message', function() {
        return function(scope, element) {
            element.text(scope.message);
        }
    })