angular.module('app')
    .directive('welcomeMessage', () => (scope, element, attrs) => element.text(attrs.welcomeMessage));