/* ex 3: dada a uma lista de palavras verifique se alguma so tem consoante 


passo 1 = criar uma function e varrer a lista de palavras 
passo 2 = criar uma lista de vogais 
passo 3 = conferir se a palavra e so consoante 
passo 4 = fazer for pra varrei a lista e passar palavra a palavra como parametro 
passo 5 = exibir o resultado */
const testCase = [`vlademir`, `ghs`, `protuberancia`]
const vogais = [`a`,`e`,`i`,`o`,`u`]
function isConsonant (word,vowels){
    for(let i = 0 ; i< word.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if (word[i]== vowels[j]){
                return false
            }
            return true;
        }
    }
}
for (let i = 0; i < testCase.length; i++){
    console.log(isConsonant(testCase[i],vogais))
}