//--------------------------------------------
// Operadores Lógicos / Estrutuas decisao
//
// //***** Para executar: terminal -> node 02-estrutura-condicional.js
//--------------------------------------------
const numero = 11;

const modNomero = numero % 2;
const numeroDivisivelPor5 = (numero % 5) === 0;

// Operador == ignora o tipo / conversao automatica
// Operador === comparações de tipos iguais
if (numero === 0) {
    console.log('numero invalido');
} else if (modNomero === 0) {
    console.log('par');
} else {
    console.log('impar');
}