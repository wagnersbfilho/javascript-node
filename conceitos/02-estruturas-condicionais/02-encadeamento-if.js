//--------------------------------------------
//Desafio 02 - Valor d euma viagem
//--------------------------------------------
const precoGasolina = 1.80;
const precoEtanol = 1.50;
const  consumno = 14.5;
const distancia = 700;
const tipoCombustivel = 'E';

const litrosConsumidos = (distancia / consumno);
let valorViagem = 0;

if (tipoCombustivel === 'G') {
    valorViagem  = litrosConsumidos * precoGasolina;
} else if (tipoCombustivel === 'E') {
     valorViagem  = litrosConsumidos * precoEtanol;
} else {
    console.log('Tipo combuistivel não informado.')
}

//Arredondar 2 casas decimais
console.log('Valor da viagem: € '+valorViagem.toFixed(2));