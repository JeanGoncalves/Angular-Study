function SumController($scope) {
    $scope.values = [1,2];
    $scope.newValue = 1;
    $scope.add = function() {
        $scope.values.push(parseInt($scope.newValue));
    };

    // Broken -- doesn't trigger UI update
    $scope.sum = $scope.values.reduce(function(a, b) {
        return a + b;
    });
}