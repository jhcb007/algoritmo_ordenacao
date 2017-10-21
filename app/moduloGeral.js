'use strict';

angular.module('moduloInicio', [])
    .controller('GeralController', GeralController);

function GeralController($scope, $rootScope, $timeout) {
    $scope.array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    $scope.tempo = 400;
    $scope.calculo = {
        num1: null,
        num2: null
    };

    $scope.embaralhar = function () {
        for (var j, x, i = $scope.array_numeros.length; i; j = Math.floor(Math.random() * i), x = $scope.array_numeros[--i], $scope.array_numeros[i] = $scope.array_numeros[j], $scope.array_numeros[j] = x);
    };

    $scope.animacao = function () {
        angular.forEach($scope.array_numeros, function (item) {
            $scope.$apply(function () {
                $scope.calculo.num1 = item;
            });
            console.log(item);
            $scope.sleep($scope.tempo);
        });
    };

    $scope.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

}