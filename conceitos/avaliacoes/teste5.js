const pedidos = [
    {
        nome: "1",
        tipo: "1",
        distancia: 2.8
    },
    {
        nome: "2",
        tipo: "2",
        distancia: 1.2
    },
    {
        nome: "3sss",
        tipo: "3",
        distancia: 4.9
    }
];

//TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
const pedido = pedidos.reduce(function(prev, current) {
    return (prev.distancia < current.distancia) ? prev : current
});

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
console.log(`O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}`);