angular.module('myApp')
.controller('PageCtrl', function($scope, Api){
    $scope.page1Ctrl= 'Lista de Zips';
    $scope.zips = Api.Zip.query();
});