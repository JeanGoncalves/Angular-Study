angular.module('app')
    .controller('MessageController', function($scope) {
        $scope.message = "This is a model.";
    })
    .controller('AnotherMessageController', function($scope) {
        $scope.message = "This is another model.";
    });