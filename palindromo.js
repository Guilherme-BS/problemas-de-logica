/*dada uma palavra restorne ela ao contrario */
const testCase = ['ola','mundo','arara']

const invertePalavra = (palavra) =>{
  let palavraInvertida = ''
  for(let i = palavra.length -1; i >= 0; i--){
    palavraInvertida += palavra[i]
  }
  if(palavraInvertida === palavra){
    return 'Is palindrome'
  }
  return 'its not palindrome '
}
for(palavra of testCase){
  console.log(invertePalavra(palavra))
}
