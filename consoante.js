/* ex 3: dada a uma lista de palavras verifique se alguma so tem consoante 


passo 1 = criar uma function e varrer a lista de palavras 
passo 2 = criar uma lista de vogais 
passo 3 = conferir se a palavra e so consoante 
passo 4 = fazer for pra varrei a lista e passar palavra a palavra como parametro 
passo 5 = exibir o resultado 
 

ex 3.1 criar uma function que verifica letra por letra e retorna se e vogal ou nao 

*/
const testCase = [`vlademir`, `ghs`, `protuberancia`]
const vogais = [`a`,`e`,`i`,`o`,`u`]
function wordIsConsonant (word){
    for(let j = 0; j < word.length; j++){
        let consoante  = letterIsConsoante(word[j]) 
        if (!consoante){
            return false   
        }
    }
    return true
}

function letterIsConsoante(letter){
    let achou = true;
    for(let i = 0 ; i< vogais.length; i++){
        if (letter === vogais[i]){
            achou = false;
        }  
    }
    return achou
}
function confereLetra(letterConso){
    let cons = letterIsConsoante(letterConso)
    return cons.toString()
}

for (let i = 0; i < testCase.length; i++){
    console.log(`Palavra : ${wordIsConsonant(testCase[i])}`)
    for(let j = 0; j< testCase[i].length; j++ ){
       console.log(`Letra e vogal ? ${confereLetra(testCase[i][j])}`)
    }
}