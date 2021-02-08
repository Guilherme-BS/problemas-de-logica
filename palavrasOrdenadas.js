/*
computado percorra toda palavra e compare a letra as letras umas com as
 outras em ordem crecente e me retorne se a palavra e ordenada ou nao 

 
    
 */
const testCase = [`a`,`zaab`, `belo`, `fino`,`cruz`, `flor`,`batata` , `abracadabra`, `aaaabc`]

function palavraOrdenada( palavra){
    for (let i = 1; i <= palavra.length; i++){
        if (palavra[i-1] > palavra[i] ){
            return false
        }
    }
    return true;
}
for (let i = 0 ; i < testCase.length; i ++){
    const palavra = testCase[i]
    const resultado = palavraOrdenada(testCase[i])
    console.log(`${palavra}:${resultado}`)
}