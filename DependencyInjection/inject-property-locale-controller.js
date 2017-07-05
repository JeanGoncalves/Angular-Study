var LocaleController = function(s, l) {
    s.locale = l.id;
};

LocaleController['$inject'] = ['$scope', '$locale'];

angular.module('app')
    .controller('LocaleController', LocaleController);