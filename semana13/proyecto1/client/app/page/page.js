'use strict';
angular.module('myApp').config(function ($routeProvider) {
    $routeProvider.when('/page', {
        templateUrl: '/app/page/page.html'
        , controller: 'PageCtrl'
    })
});