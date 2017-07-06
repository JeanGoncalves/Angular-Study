/*angular.module('app')
    .filter('smiley', function() {
        return function(text) {
            return '\u263A' + text + '\u263A';
        }
    })*/
    
/* REFACTOR */
angular.module('app')
    .filter('smiley', () => text => '\u263A' + text + '\u263A');