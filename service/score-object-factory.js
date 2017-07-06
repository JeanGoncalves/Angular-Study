angular.module('app')
    .factory('score', function(randomScore) {
        var points = randomScore();
        return {
            increment : function() {
                return ++points;
            },
            getPoints : function() {
                return points;
            }
        }
    });