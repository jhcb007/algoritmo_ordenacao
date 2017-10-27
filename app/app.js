'use strict';

var array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var array_numeros_final = [];
var array_ordenado = [];
var tempo = 1000;
var _calculo = {
    i_menor: 0,
    i_maior: 1,
    count: 0,
    _passadas: 0
};

function popular_numeros() {
    $('#div_numero').html('');
    $.each(array_numeros, function (key, value) {
        $("#div_numero").append('<img width="50px" id="numero_' + value + '" style="display: none" src="img/' + value + '.svg">');
    });
}

function popular_numeros_ordenado() {
    $('#div_numero_ordenado').html('');
    $.each(array_ordenado, function (key, value) {
        $("#div_numero_ordenado").append('<img width="50px" src="img/' + value + '.svg">');
    });
}

function exibir_numeros() {
    $.each(array_numeros, function (key, value) {
        $("#numero_" + value).fadeIn("slow");
    });
}

function embaralhar() {
    for (var j, x, i = array_numeros.length; i; j = Math.floor(Math.random() * i), x = array_numeros[--i], array_numeros[i] = array_numeros[j], array_numeros[j] = x) ;
    array_numeros_final = array_numeros.slice(0);
    popular_numeros();
    exibir_numeros();
}

function finaliza() {
    $("#calculo_num_menor").html('<img width="80px" src="img/branco.svg">');
    $("#calculo_maior_menor").html('');
    $("#calculo_num_maior").html('<img width="80px" src="img/branco.svg">');
    array_numeros_final = [];
    array_ordenado = [];
    _calculo.i_menor = 0;
    _calculo.i_maior = 0;
    _calculo._passadas = 0;
    _calculo.count = 0;
}

var executa_animacao = function () {

    $("#calculo_maior_menor").html('');

    $("#calculo_num_menor").html('<img width="80px"  id="cal_img_menor' + array_numeros[_calculo.i_menor] + '" class="rounded-circle" style="display: none" src="img/' + array_numeros[_calculo.i_menor] + '.svg">');

    if (array_numeros[_calculo.i_maior] > array_numeros[_calculo.i_menor]) {
        $("#calculo_maior_menor").html('<img width="80px" id="menor_maior_img" class="rounded-circle" style="display: none" src="img/left.svg">');
    } else {
        $("#calculo_maior_menor").html('<img width="80px" id="menor_maior_img" class="rounded-circle" style="display: none" src="img/right.svg">');
    }

    $("#calculo_num_maior").html('<img width="80px" id="cal_img_maior' + array_numeros[_calculo.i_maior] + '" class="rounded-circle"  style="display: none" src="img/' + array_numeros[_calculo.i_maior] + '.svg">');

    $("#cal_img_menor" + array_numeros[_calculo.i_menor]).fadeIn(100);
    $("#menor_maior_img").fadeIn(1000);
    $("#cal_img_maior" + array_numeros[_calculo.i_maior]).fadeIn(100);

    if (array_numeros[_calculo.i_maior] > array_numeros[_calculo.i_menor]) {
        _calculo.i_maior = _calculo.i_maior + 1;
    } else {
        _calculo.i_menor = _calculo.i_maior;
        _calculo.i_maior = _calculo.i_menor + 1;
    }

    _calculo.count = _calculo.count + 1;

    if (_calculo.count > (array_numeros.length - 2) && array_numeros.length > 1) {

        array_ordenado.push(array_numeros[_calculo.i_menor]);
        array_numeros.splice(_calculo.i_menor, 1);

        _calculo.count = 0;
        _calculo.i_menor = 0;
        _calculo.i_maior = 1;

        popular_numeros();
        exibir_numeros();
        popular_numeros_ordenado();

        _calculo._passadas = _calculo._passadas + 1;

    }

    if (_calculo.count > (array_numeros.length - 2) && array_numeros.length === 1) {
        array_ordenado.push(array_numeros[0]);
        array_numeros.splice(0, 1);
        popular_numeros_ordenado();
        array_numeros = array_numeros_final;
        popular_numeros();
        exibir_numeros();
        finaliza();
        return;
    }

    if (_calculo._passadas > 17) {
        return;
    }

    setTimeout(executa_animacao, tempo);
};


function animacao() {

    tempo = parseInt($("#txtTempo").val());
    if (!tempo) {
        tempo = 1000;
    }
    $("#div_numero_ordenado").html('');
    executa_animacao();
}


function init() {
    embaralhar();
    popular_numeros();
    exibir_numeros();
}

init();
