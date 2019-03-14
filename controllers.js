app.controller('tableCtrl', ['$scope','$location','$routeParams', function ($scope, $location, $routeParams) {
  
  if (localStorage.getItem("items") === null) {
      $scope.items = [];
      localStorage.setItem("items", JSON.stringify($scope.items));
    }else {
      $scope.items = JSON.parse(localStorage.getItem("items"));
    }

    $scope.change = function(ind) {
      $scope.items[ind].show = !($scope.items[ind].show);
      //localStorage.setItem("items", JSON.stringify($scope.items));
    }

    $scope.ident = $routeParams.id;

    $scope.saveChange = function(ind) {
      $scope.items[ind].show = !($scope.items[ind].show);
      localStorage.setItem("items", JSON.stringify($scope.items));

      $location.path('/products');
    }

    $scope.delete = function(ind) {
      $scope.items.splice($scope.items.indexOf(ind), 1); 
      localStorage.setItem("items", JSON.stringify($scope.items));
    }

    $scope.submit = function() {
      //if ($scope.produto) {
          var newitem = {name:"testName",location:"testLocation",show:false};
          $scope.items.push(newitem);
          localStorage.setItem("items", JSON.stringify($scope.items));
      //}
    }

    $scope.produtoPerecivel = false;  
    
    $scope.add = function() {
      $scope.produtoPerecivel = false;  
      $location.path('/products');

        
    }

    $scope.salvar = function() {      
      if ($scope.text) {
            var newitem = {name:$scope.text, 
              location:$scope.text2, 
              quantidade:$scope.quantidade, 
              preco:$scope.preco, 
              produtoPerecivel:$scope.produtoPerecivel,
              show:false};
            
            $scope.items.push(newitem);
            localStorage.setItem("items", JSON.stringify($scope.items));
            $scope.text = '';
            $scope.text2 = '';
            $location.path('/products');
        }
    }

    $scope.salvarEdit = function() {      
      if ($scope.text) {
            var newitem = {name:$scope.text, location:$scope.text2, show:false};
            $scope.items.push(newitem);
            localStorage.setItem("items", JSON.stringify($scope.items));
            $scope.text = '';
            $scope.text2 = '';
            $location.path('/products');
        }
    }

    $scope.name = "John Doe";

}])