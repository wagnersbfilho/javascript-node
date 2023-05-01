//--------------------------------------------
// Classes e Objetos
//
//***** Para executar: terminal -> node 04-objetos.js
//--------------------------------------------

// coleºão dinamica do tipo map: chave/valor
const  pessoa = {
    name: 'Wagner',
    idade: 42,

    descrever: function(){
        console.log(`Meu nome eh: ${this.name} e minha idade eh ${this.idade}`); // usar sinal de "crase"
    }
}

console.log(pessoa.name);
console.log(pessoa.idade);
pessoa.descrever();

// adicionar item
pessoa.altura = 1.80;
console.log(pessoa);

// remover item
delete pessoa.idade;
pessoa.name = 'João';
console.log(pessoa);
pessoa.descrever = function() {
    console.log(`Meu nome eh ${this.name}`)
}
pessoa.descrever();

// acessar valor atributo pelo nome
const atributo = 'name';
console.log(pessoa[atributo]);