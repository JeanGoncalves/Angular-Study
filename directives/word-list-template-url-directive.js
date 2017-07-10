angular.module('app')
    .directive('wordList', function() {
        return {
            link: function(scope, element, attrs) {
                scope.words = attrs.wordList.split(" ");
            },
            templateUrl: './views/word-list.html'
        };
    });