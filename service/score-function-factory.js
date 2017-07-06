angular.module('app')
    .factory('score', function(randomScore) {
        return {points: randomScore()};
    });