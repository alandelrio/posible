var app = angular.module('app', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.htm",
        controller : "controller"
    })
    .when("/stocks", {
        templateUrl : "stocks.htm",
        controller : "stocksController"
    })
    .when("/cashier", {
        templateUrl : "cashier.htm",
        controller : "cashierController"
    });
});