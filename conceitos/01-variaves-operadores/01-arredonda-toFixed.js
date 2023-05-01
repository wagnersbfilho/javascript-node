//--------------------------------------------
//Valor de uma viagem
//--------------------------------------------
let preco = 1.80;
let  litros = 14.5;
let distancia = 700;

let valorViagem  = (distancia / litros) * preco;

//Arredondar 2 casas decimais
console.log('Valor da viagem: € '+valorViagem.toFixed(2));