angular.module('app')
    .controller('LocaleController', ['$scope', '$locale', function(s, l) {
        s.locale = l.id;
    }]);