//importando:
const funcoes = require('./06-funcoes-exports');

console.log(funcoes);
console.log(funcoes.gets());


//object desctructuring
const pessoa = {
    nome: 'wagner'
}

// esta declaracao...
const nom1e = pessoa.nome
// ...é equivalente a essa
const {nome2} = pessoa;

//desctructuring com imports:
const{gets, print} = require('./06-funcoes-exports');

print(gets());