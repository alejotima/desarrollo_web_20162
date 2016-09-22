angular.module('myApp', [])
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