angular.module('website.controllers', [])

    .controller('homeController', ['$scope', '$location', '$routeParams', 'SEOService', function ($scope, $location, $routeParams, SEOService) {
  

        SEOService.setSEO({
            title: 'Luke Robinson',
            image: 'http://' + $location.host() + '/images/',
            url: $location.url(),
            description: 'Luke Robinson is a freelance web developer/coder'
            });
        }]);