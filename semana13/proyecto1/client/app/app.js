angular.module('myApp', ['ngRoute', 'ngResource'])
    .factory('Api', function ($resource) {
        return {
            Zip: $resource('api/zips/:id', {
                id: '@id'
            })
        }
    });