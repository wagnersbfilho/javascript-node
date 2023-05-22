const pedido = {
    cliente: "a",
    endereco: "a",
    itens: [],
    taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = 2;
while (pedido.itens.length < quantidadeItens) {
    const nomeItem = "a";
    const precoItem = 10.0;
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let totalCalculado = pedido.taxaEntrega;
for (let i=0; i<pedido.itens.length; i++) {
    totalCalculado += pedido.itens[i].preco;
}

//TODO: Imprima a saída no padrão descrito neste desafio.
console.log(`Pedido: ${pedido.cliente}`);
console.log(`Endereço de entrega: ${pedido.endereco}`);
console.log(`Total: R$ ${totalCalculado.toFixed(2)}`);


