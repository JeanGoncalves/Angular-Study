angular.module('app')
    .config(function($provide) {
        $provide.decorator('score', function($delegate) {
            $delegate.points = 1000000;
            return $delegate;
        });
    });