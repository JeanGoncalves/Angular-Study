var require = function(name) {
    return angular.injector(['ng','app']).get(name);
};

angular.module('app')
    .controller('LocaleController', ['$scope', function($scope) {
        var $locale = require('$locale');
        $scope.locale = $locale.id;
    }
]);