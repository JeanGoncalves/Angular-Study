angular.module('app')
    .directive('wordList', function() {
        return {
            link: function(scope, element, attrs) {
                scope.words = attrs.wordList.split(" ");
            },
            template: "<li ng-repeat='word in words'>\
                            {{ word }}\
                        </li>"
        };
    });