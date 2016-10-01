angular.module('myApp', ['ngRoute'])
    .controller('myCtrl', function ($scope, Api) {
        $scope.yourName = '';
        $scope.names = ['camilo', 'jua', 'david', 'freddy', 'jose'];
        $scope.fullName = [
            {
                name: 'camilo',
                lastname: 'perez'
            },
            {
                name: 'camilo',
                lastname: 'rodriguez'
            },
            {
                name: 'camilo',
                lastname: 'perea'
            }
        ];
    })
    .controller('test1Ctrl', function ($scope) {
        $scope.test1 = 'Esta es la prueba del controlador de test1';

    })
    .directive('miDirectiva', function () {
        return {
            template: 'Esta es mi primera directiva'
        };
    })
    .directive('miDirectivaH1', function () {
        return {
            restrict: 'E',
            template: '<h1>Directiva de H1</h1>'
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/test1', {
                templateUrl: 'test1.html'
            })
            .when('/test2', {
                templateUrl: 'test2.html'
            })
    })
    .factory('Api', function ($resource) {
        return {
            Test: $resource('/api/test/:id')
        }
    });
/*
 * Restricciones de directivas
 *   E nombre de elemento
 *   A Atributos
 *   C clases
 *   M comentarios
 *   por defecto EA
 */