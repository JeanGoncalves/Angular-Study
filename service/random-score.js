angular.module('app')
    .value('randomScore', function() {
        return Math.ceil(Math.random() * 10);
    });