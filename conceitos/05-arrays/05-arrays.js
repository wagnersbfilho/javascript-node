//--------------------------------------------
// Arrays
//
//***** Para executar: terminal -> node 05-arrays.js
//--------------------------------------------const alunos = ['A', 'B', 'C'];

console.log(alunos);
console.log(alunos[0]);

alunos.push('D'); //insere no final
alunos[4] = 'E';
alunos[0] = 'AA';
alunos.pop(); // remove ultima posicao
alunos.push(10);
alunos.shift(); // remnove o primeiro
console.log(alunos);
console.log(alunos.length);

