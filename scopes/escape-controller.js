function EscapeController($scope, $element) {
    $scope.message = '';
    $element.bind('keyup', function (event) {
        if (event.keyCode === 27) { // esc key

            // Broken -- doesn't trigger UI update
            $scope.message = '';
        }
    });
}