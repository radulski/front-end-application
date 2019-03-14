
//This controller retrieves data from the productsService and associates it with the $scope
//The $scope is ultimately bound to the products view


app.controller('ProductsController', function ($scope, productsService) {

    init();

    function init() {
        productsService.getProducts().success(function(data){
            $scope.products = data;
        });
    }

    $scope.items = [
        {name:"avinash",location:"Hyderabad",show:false},
        {name:"gouthami",location:"Hyderabad",show:false},
        {name:"karthik",location:"secunderabad",show:false},
        {name:"lala",location:"secunderabad",show:false},
    ];


    $scope.myTxt = "You have not yet clicked submit";
    $scope.myFunc = function () {
        $scope.myTxt = "You clicked submit!";
    }


    $scope.list = [];
    //$scope.text = 'hello';
    $scope.submit = function() {
        if ($scope.produto) {

            var newitem = {name:"testName",location:"testLocation",show:false};
            $scope.items.push(newitem);
            localStorage.setItem("items", JSON.stringify($scope.items));


            //$scope.list.push(this.produto);
            //$scope.produto = '';
        }
    };

    $scope.add = function() {
        var newitem = {name:"test222",location:"test222",show:false};
        $scope.items.push(newitem);
        localStorage.setItem("items", JSON.stringify($scope.items));
    }


    $scope.insertProduct = function () {
        var name = $scope.newProduct.name;
        var code = $scope.newProduct.code;
        var description = $scope.newProduct.description;
        var price = $scope.newProduct.price;

        productsService.insertProduct(name, code, description, price).success(function(data, status, headers, config){
            $scope.products.push(
                {
                    id: data,
                    name: name,
                    code: code,
                    description: description,
                    price: price
                });
        });

        $scope.newProduct.name = '';
        $scope.newProduct.code = '';
        $scope.newProduct.description = '';
        $scope.newProduct.price = '';
    };

    $scope.deleteProduct = function (id) {
        productsService.deleteProduct(id).success(function(success){

            for (var i = $scope.products.length - 1; i >= 0; i--) {
                if ($scope.products[i].id === id) {
                    $scope.products.splice(i, 1);
                    break;
                }
            }

        });
    };


});