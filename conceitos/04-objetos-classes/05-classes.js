class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}. Idade: ${this.idade}. Ano nascimento = ${this.anoNascimento}`)
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Wagner';
pessoa1.idade = 42;

const pessoa2 = new Pessoa('fulano', 30);

pessoa1.descrever();
pessoa2.descrever();

new Pessoa('jose', 20).descrever();