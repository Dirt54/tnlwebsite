angular.module('myApp', ['ngRoute', 'ngResource', 'website.controllers', 'website.services', 'website.factories'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
}]);