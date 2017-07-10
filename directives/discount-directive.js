angular.module('app')
    .directive('discount', function(calculateDiscount, currencyFilter) {
        return function(scope, element, attrs) {
            var price = scope.$eval(attrs.discount);
            var discountPrice = calculateDiscount(price);
            element.html(currencyFilter(discountPrice));
        }
    })