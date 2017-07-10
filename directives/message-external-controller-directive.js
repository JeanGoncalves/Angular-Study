angular.module('app')
    .controller('MessageController', function($scope) {
        $scope.message = 'hello, from the external controller';
    })
    .directive('message', function() {
        return {
            template: "<strong>{{ message }}</strong>"
        };
    });