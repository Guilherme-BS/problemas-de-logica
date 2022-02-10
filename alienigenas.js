/*
objetivo = imprimir quantos mdna de uma determinada lista sao destintos
como fazer ? entrar um nivel da lista entrar outro nivel da lista passando o charcode em cada letra e adicionar o valor em uma lista secundaria  */

const testCase =
  [
    ['AAA','AAB','ABC'],
    ['AAAB','AABA','ABAA','BAAA'],
    ['ASD','ESA']
  ]
const isDifferent = (listMdna) => {
  const valueLetter = []
  let distinctMdna = 1
  let valueLetterTotal = 0
  for(let i = 0; i < listMdna.length; i++){
    for(let j = 0;j <listMdna[i].length; j ++){
      valueLetterTotal+=listMdna[i][j].charCodeAt()
    }
    valueLetter.push(valueLetterTotal)
    valueLetterTotal = 0
  }
  let totalOne = valueLetter[0]
  for(let c = 0; c < valueLetter.length; c++){
    if(totalOne != valueLetter[c]){
      distinctMdna+=1
    }
  }
  return distinctMdna
}
for(tc of testCase){
console.log(isDifferent(tc)
)}
