angular.module('app')
    .directive('strongMessage', function() {
        return function(scope, element, attrs) {
            element.html('<strong>' + attrs.strongMessage + '<strong>');
        };
    });