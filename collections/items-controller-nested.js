function ItemsController($scope) {
    $scope.items = [{
        name: 'Item 1',
        items: [
            {
                name: 'Nested Item 1.1'
            }, {
                name: 'Nested Item 1.2'
            }]
        }, {
        name: 'Item 2',
        items: [{
                name: 'Nested Item 2.1'
            }, {
                name: 'Nested Item 2.2'
            }]
        }
    ];
}