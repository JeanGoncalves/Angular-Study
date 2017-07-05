angular.module('app')
    .factory('fullPrice', ['$http', function($http) {
            return function() {

                // Use $http to fetch remote data.
                return 100;
            }
        }
    ])
    .factory('discountPrice', ['$http', function($http) {
        return function() {
            
            // Use $http to fetch remote data.
            return 40;
        }
    }
]);