angular.module('app')
    .value('discountRate', 0.8)
    .factory('calculateDiscount', function(discountRate) {
        return function(amount) {
            return amount * discountRate;
        };
    });

/* REFACTORY */
/*angular.module('app')
    .value('discountRate', 0.8)
    .factory('calculateDiscount', (discountRate) => (amount) => amount * discountRate);*/