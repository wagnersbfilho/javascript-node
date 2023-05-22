const pedido = {
    cliente: {
                nome: "a",       // Lê a primeira linha da "Entrada": Nome do Cliente.
        endereco: "a",   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: 1, // Lê a terceira linha da "Entrada": ID do Pedido.
};

//TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
let tel = "a";
//TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
pedido.cliente.telefone = tel;

//TODO: Imprima a saída formatada de acordo com este desafio.
console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);
console.log(`ID: ${pedido.id}`);
console.log(`Tel: ${pedido.cliente.telefone}`);
