angular.module('app')
    .directive('welcomeMessage', function() {
        return function(scope, element, attrs) {
            var options = scope.$eval(attrs.welcomeMessage);
            var result = options.emoticon + ' ' + options.message + ' ' + options.emoticon;
            element.text(result);
        }
    });