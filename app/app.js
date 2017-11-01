'use strict';

var array_numeros = [];
var array_numeros_ordenados = [];
var tempo = 500;
var _calculo = {
    i_menor: 0,
    i_maior: 1,
    count: 0
};

function init_array() {
    array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    array_numeros_ordenados = [];
}

function troca(primeiro_index, segundo_index) {
    var temp = array_numeros[primeiro_index];
    array_numeros[primeiro_index] = array_numeros[segundo_index];
    array_numeros[segundo_index] = temp;
}

function popular_numeros() {
    $('#div_numero').html('');
    $.each(array_numeros, function (key, value) {
        $("#div_numero").append('<img width="50px" id="numero_' + value + '" style="display: none" src="img/' + value + '.svg">');
    });
}

function popular_numeros_ordenados() {
    $('#div_numero_ordenado').html('');
    $.each(array_numeros_ordenados, function (key, value) {
        $("#div_numero_ordenado").append('<img width="50px" id="numero_' + value + '" src="img/' + value + '.svg">');
    });
}

function exibir_numeros() {
    $.each(array_numeros, function (key, value) {
        $("#numero_" + value).fadeIn(1);
    });
}

function embaralhar() {
    for (var j, x, i = array_numeros.length; i; j = Math.floor(Math.random() * i), x = array_numeros[--i], array_numeros[i] = array_numeros[j], array_numeros[j] = x) ;
    popular_numeros();
    exibir_numeros();
}

function finaliza() {
    $("#calculo_num_menor").html('<img width="80px" src="img/branco.svg">');
    $("#calculo_maior_menor").html('');
    $("#calculo_num_maior").html('<img width="80px" src="img/branco.svg">');
    $("#btnNovaAnimacao").fadeIn(100);
    _calculo.i_menor = 0;
    _calculo.i_maior = 1;
    _calculo.count = 0;
}

var executa_animacao = function () {

    $("#calculo_num_menor").html('<img width="80px"  id="cal_img_menor' + array_numeros[_calculo.i_menor] + '" class="rounded-circle" style="display: none" src="img/' + array_numeros[_calculo.i_menor] + '.svg">');

    if (array_numeros[_calculo.i_maior] > array_numeros[_calculo.i_menor]) {
        $("#calculo_maior_menor").html('<img width="80px" id="menor_maior_img" class="rounded-circle" style="display: none" src="img/left.svg">');
    } else {
        $("#calculo_maior_menor").html('<img width="80px" id="menor_maior_img" class="rounded-circle" style="display: none" src="img/right.svg">');
    }

    $("#calculo_num_maior").html('<img width="80px" id="cal_img_maior' + array_numeros[_calculo.i_maior] + '" class="rounded-circle"  style="display: none" src="img/' + array_numeros[_calculo.i_maior] + '.svg">');

    $("#cal_img_menor" + array_numeros[_calculo.i_menor]).fadeIn(1);
    $("#menor_maior_img").fadeIn(300);
    $("#cal_img_maior" + array_numeros[_calculo.i_maior]).fadeIn(1);

    if (array_numeros[_calculo.i_maior] > array_numeros[_calculo.i_menor]) {
        _calculo.i_maior = _calculo.i_maior + 1;
    } else {
        _calculo.i_menor = _calculo.i_maior;
        _calculo.i_maior = _calculo.i_menor + 1;
    }

    _calculo.count = _calculo.count + 1;

    if (_calculo.count > (array_numeros.length - 2) && array_numeros.length > 1) {

        array_numeros_ordenados.push(array_numeros[_calculo.i_menor]);
        troca(0, _calculo.i_menor);
        array_numeros.splice(0, 1);

        _calculo.count = 0;
        _calculo.i_menor = 0;
        _calculo.i_maior = 1;

        popular_numeros();
        popular_numeros_ordenados();
        exibir_numeros();
    }

    if (array_numeros.length < 2) {
        finaliza();
        return;
    }

    if (_calculo.count > (array_numeros.length - 2)) {
        array_numeros.splice(0, 1);
        popular_numeros();
        exibir_numeros();
    }

    setTimeout(executa_animacao, tempo);

};

function nova_animacao() {
    $("#btnNovaAnimacao").fadeOut(100);
    init_array();
    embaralhar();
    animacao();
}

function animacao() {

    tempo = parseInt($("#txtTempo").val());
    if (!tempo) {
        tempo = 500;
    }
    $("#div_numero_ordenado").html('');
    executa_animacao();
}


function init() {
    init_array();
    embaralhar();
    popular_numeros();
    exibir_numeros();
}

init();
