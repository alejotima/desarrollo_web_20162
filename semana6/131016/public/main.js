angular.module('myApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/test1', {
                templateUrl: 'test1.html',
                controller: 'test1Ctrl'
            })
            .when('/test2', {
                templateUrl: 'test2.html'
            })
    })
    .factory('Api', function ($resource) {
        return {
            Quotes: $resource('api/quotes/:id', {
                id: '@id'
            })
        }
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
    })
    .controller('test1Ctrl', function ($scope, Api) {
        $scope.test1 = 'lista de citas';
        $scope.quotes = Api.Quotes.query();
        $scope.newQoute = {};
        $scope.addQuote = function() {
            console.log('entro a agregar');
            $scope.newQoute = {
                author: $scope.author,
                text: 'Texto prueba'
            };
            Api.Quotes.save($scope.newQoute,function(){
                $scope.quotes = Api.Quotes.query();
            });
        };
        $scope.removeQuote = function(identeificador){
            Api.Quotes.delete({id:identeificador}, function(){
                $scope.quotes = {};
               $scope.quotes = Api.Quotes.query(); 
            });
        }
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