app.controller('stockController', function($scope) {
    $scope.sku = "sku1";
    $scope.upc = "upc1";
    $scope.name = "Cheese Cupcake";
    $scope.size = "regular";
    $scope.stocks = [
        {sku:'sku1',upc:'upc1',name:'Cheese Cupcake',size:'regular'},
        {sku:'sku2',upc:'upc2',name:'Cheese Cupcake',size:'mini'},
        {sku:'sku3',upc:'upc3',name:'Choco Cupcake',size:'regular'},
        {sku:'sku4',upc:'upc4',name:'Choco Cupcake',size:'mini'}
    ];
});