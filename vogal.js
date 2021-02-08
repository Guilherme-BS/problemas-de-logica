// ex 2 : Dada uma lista de palavras verifique se a palavra so tem vogal 
// passo 1 = criar uma function confereVogal e varrer a determinada lista 
// passo 2 = conferir se a palavra e so tem vogal  
// passo 3 = fazer um for na lista passando o como parametro pra function 
// passo 4 = imprimir de forma correta o resultado 

const testCase = [`acbd`,`aeou`,`ponte`]
const vogais = [`a`,`e`,`i`,`o`,`u`]
function eVogal (palavra,vogaisDeComparacao){
    for (let i = 0; i < palavra.length; i++){
        for (let j = 0 ; j < vogaisDeComparacao.length; j++){
            if (palavra[i]!= vogaisDeComparacao[j]){
                return false;
            }
            return true;
        }
    }
}
for (let i = 0 ; i < testCase.length; i++){
    console.log(eVogal(testCase[i],vogais))
}