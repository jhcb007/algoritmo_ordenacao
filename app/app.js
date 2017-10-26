'use strict';
// Declare app level module which depends on views, and components

var array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var tempo = 1500;
var calculo = {
    num1: null,
    num2: null
};

function espera(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function popular_numeros() {
    $('#div_numero').html('');
    $.each(array_numeros, function (key, value) {
        $("#div_numero").append('<img width="50px" id="numero_' + value + '" style="display: none" src="img/' + value + '.svg">');
    });
}

function exibir_numeros(pausa) {
    $.each(array_numeros, function (key, value) {
        $("#numero_" + value).fadeIn("slow");
    });
}

function embaralhar() {
    for (var j, x, i = array_numeros.length; i; j = Math.floor(Math.random() * i), x = array_numeros[--i], array_numeros[i] = array_numeros[j], array_numeros[j] = x) ;
    popular_numeros();
    exibir_numeros(false);
}


var executa_animacao = function () {

    for (var i = 0; i < array_numeros.length; ++i) {
        $("#calculo_num1").html('');
        $("#calculo_maior_menor").html('');
        $("#calculo_num2").html('');
        $("#calculo_num1").append('<img width="80px"  id="cal1_img_' + array_numeros[i] + '" class="rounded-circle" style="display: none" src="img/' + array_numeros[i] + '.svg">');
        if (array_numeros[i] > array_numeros[i + 1]) {
            $("#calculo_maior_menor").append('<img width="80px" id="menor_maior_img" class="rounded-circle" style="display: none" src="img/right.svg">');
        } else {
            $("#calculo_maior_menor").append('<img width="80px" id="menor_maior_img" class="rounded-circle" style="display: none" src="img/left.svg">');
        }
        $("#calculo_num2").append('<img width="80px" id="cal2_img_' + array_numeros[i + 1] + '" class="rounded-circle"  style="display: none" src="img/' + array_numeros[i + 1] + '.svg">');

        $("#cal1_img_" + array_numeros[i]).fadeIn(200);
        $("#menor_maior_img").fadeIn(2000);
        $("#cal2_img_" + array_numeros[i + 1]).fadeIn(200);
        embaralhar();
        setTimeout(executa_animacao, 400);
        return;
    }

};


function animacao() {
    executa_animacao();
}


function init() {
    embaralhar();

}

var recursiva = function () {
    //console.log("Se passaram 1 segundo!");
    //setTimeout(recursiva,1000);
}
recursiva();

init();