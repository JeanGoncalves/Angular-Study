angular.module('app')
    .filter('localize', function(locales, $locale) {
        return function(key) {
            var locale = locales[$locale.id] || locales['en-us'];
            return locale[key];
        }
    })