angular.module('myApp', ['ngRoute', 'ngResource'])
    .factory('Api', function ($resource) {
        return {
            Quotes: $resource('api/quotes/:id', {
                id: '@id'
            })
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html'
            })
            .when('/parrafo', {
                templateUrl: 'parrafo.html',
                controller: 'parrafoCtrl'
            })
    })
    .controller('parrafoCtrl', function ($scope, Api) {
        $scope.parrafoPrueba = 'Lista de citaciones';
        $scope.quoutes = Api.Quotes.query();
        $scope.newQuote = {};

        $scope.addQuote = function () {

            $scope.newQuote = {
                author: $scope.author,
                text: 'esto es un texto quemado'
            };
            console.log($scope.newQuote);
            Api.Quotes.save($scope.newQuote, function (data) {
                console.log(data);
                $scope.quoutes = Api.Quotes.query();
            });
        };
        $scope.removeQuote = function (obj) {
            console.log(obj);
            Api.Quotes.delete({id:obj},function(data){
                
                console.log(data);
                $scope.quoutes = Api.Quotes.query();
            });
        };
    })
    .controller('myCtrl', function ($scope) {
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

        $scope.countries = [
            {
                name: 'carlos',
                country: 'Noruega'
            },
            {
                name: 'pedro',
                country: 'Colombia'
            },
            {
                name: 'pepito',
                country: 'Peru'
            },
            {
                name: 'camilo',
                country: 'Venezuela'
            },
            {
                name: 'jose',
                country: 'Argentina'
            },
            {
                name: 'david',
                country: 'Panama'
            },
            {
                name: 'fredy',
                country: 'Chile'
            }
        ];

        $scope.orderByMe = function (x) {
            $scope.myOrder = x;
        };

        $scope.price = 12;
        $scope.nombrePrueba = 'pepito';
        $scope.nombrePrueba2 = 'PEDRITO';

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
    });
/*
 * Restricciones de directivas
 *   E nombre de elemento
 *   A Atributos
 *   C clases
 *   M comentarios
 *   por defecto EA
 */