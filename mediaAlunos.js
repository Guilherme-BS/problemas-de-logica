
/**
  Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos.
  Calcular a médiada turma e contar quantos alunos obtiveram nota acima desta média
  calculada. Escrever a média da turma e o resultado da contagem.
 */
const testCase = []
const numeroDeAlunos = 20
let somaNotas = 0
for(let i= 0; i < numeroDeAlunos; i++){
  testCase.push(Math.floor(Math.random() * 11))
  somaNotas += testCase[i]
}
let media = somaNotas / numeroDeAlunos
function abaixoDaMedia(notas){
  let recuperacao = 0
  for(let nota of notas){
    if(nota > media){
      recuperacao += 1
    }
  }
  return recuperacao
}
console.log(media)
console.log(abaixoDaMedia(testCase))
