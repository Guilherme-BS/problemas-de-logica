// ex 2 : Dada uma lista de palavras verifique se a palavra so tem vogal 
// passo 1 = criar uma function confereVogal e varrer a determinada lista 
// passo 2 = conferir se a palavra e so tem vogal  
// passo 3 = fazer um for na lista passando o como parametro pra function 
// passo 4 = imprimir de forma correta o resultado 
// ex 3.1 criar uma function que verifica letra por letra e retorna se e vogal ou nao
const testCase = [`acbd`,`aeou`,`ponte`]
const vogais = [`a`,`e`,`i`,`o`,`u`]
function palavraEVogal (palavra){
    for (let i = 0; i < palavra.length; i++){
        let vogal = letraEVogal(palavra[i])
        if(!vogal){
            return false
        }
    }
    return true;
}
function letraEVogal (letra){
    let vogal = false
    for (let j = 0 ; j < vogais.length; j++){
        if (letra === vogais[j]){
            vogal = true;   
        }
    }
    return vogal
}
function confereLetra (letra){
    let vog = letraEVogal(letra)
    return vog.toString()
}

for(let i = 0; i< testCase.length; i++){
    console.log(`Palavra : ${palavraEVogal(testCase[i])}`)
    for(let j = 0; j < testCase[i].length; j++){
        console.log(`Letra e vogal ? : ${confereLetra(testCase[i][j])}`)
    }
} 