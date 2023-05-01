//--------------------------------------------
// Funções
//
//***** Para executar: terminal -> node 03-funcoes-simples.js
//--------------------------------------------

function teste(name) {
    console.log('hello:' + name);
}

function calculo(numero) {
    return Math.pow(numero, 2);
}

teste('me');
teste('you');
console.log(calculo(10));