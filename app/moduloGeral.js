'use strict';

angular.module('moduloInicio', [])
    .controller('GeralController', GeralController);

function GeralController($scope) {
    $scope.teste = "laksjfasdf";
    $scope.array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    angular.forEach($scope.array_numeros, function (item) {

    });

}