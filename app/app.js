
//This configures the routes and associates each route with a view and a controller
var app = angular.module('productsApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/products',
        {
            //controller: 'ProductsController',
            templateUrl: 'app/partials/products.html'
        })

        .when('/products/new',
        {
            //controller: 'ProductsController',
            templateUrl: 'app/partials/products-new.html'
        })

        .when('/products/edit',
        {
            //controller: 'tableCtrl',
            templateUrl: 'app/partials/products-edit.html'
        })

        .otherwise({ redirectTo: '/products' });
});

