var app = angular.module('tableApp', ['ngRoute', 'rw.moneymask']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'app/partials/products.html'
        })

        .when('/products/new', {
            templateUrl: 'app/partials/products-new.html'
        })

        .when('/products/edit/:id', {
            controller: 'tableCtrl',
            templateUrl: 'app/partials/products-edit.html'
        })

        .otherwise({
            redirectTo: '/products'
        });
});