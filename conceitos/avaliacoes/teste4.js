const restaurantes = [
    {
        nome: "gets(1)",
        avaliacao: parseFloat(3)
    },
    {
        nome: "gets(2)",
        avaliacao: parseFloat(4.0)
    },
    {
        nome: "gets(3)",
        avaliacao: parseFloat(5)
    }

];
let maior = Math.max.apply(Math, restaurantes.map(function(o) { return o.avaliacao; }));
const max = restaurantes.reduce(function(prev, current) {
    return (prev.avaliacao > current.avaliacao) ? prev : current
})
console.log(max.avaliacao.toFixed(1));
