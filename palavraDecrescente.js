/*ex 1 :dada a uma lista de palvras verifique se a palavra se a palavra 
esta decrecente
passo 1 = criar uma function palavraDecrescente varrer essa lista letra a letra
passo 2 = criar uma condicional que analiza letra pro letra da palavra 
passo 3 = dar um for na lista e passalo como patametro pra function 
passo 4 = mostrar resolucao de forma dinamica 
*/
const testCase = [`acba`,`tjk`,`idba`, `ghjt`]
function palavraDecrescente(palavra){
    for (let i = 0 ; i < palavra.length; i++){
        if (palavra[i]> palavra[i-1]){
            return false;
        }
    }
    return true;
}
for (let i = 0 ; i < testCase.length; i++){
    let palavraPraMostrar = testCase[i]
    let resultado = palavraDecrescente(testCase[i])
    console.log(`${palavraPraMostrar} : ${resultado} Teste ${i}`)
}
