angular.module('app')
    .directive('message', function() {
        return {
            template: "<strong>{{ message }}</strong>",
            controller: function($scope) {
                $scope.message = "hello, from the internal controller"
            }
        }
    })