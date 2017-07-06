angular.module('app')
    .controller('ScoreController', function($scope, score, randomScore) {
        $scope.score = score;
        $scope.increment = function() {
            $scope.score.points += randomScore();
        };
    });