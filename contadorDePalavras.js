/* Dado um texto vou contar quantas vezes cada palavra aparece
1 ler cada nome da lista
2 identificar as palavras iguais
3 contar quantas vezes a palavra se repete 
4 exibir a execuçao dos passos anteriores 
peguei uma palavra eu adiciono no dicionario 
ex:
dada a entrada '['mamao', 'abacate', 'uva', 'adol', 'abacate', 'uva', 'abacate']'


saida : mamao 1
abacate 3
uva 2 
adol 1


*/

function contadorDePalavras (palavras){
    let dicionario = {}
    for (let posicao = 0; posicao < palavras.length; posicao++){
        let palavra = palavras[posicao]
        if (!dicionario[palavra] ){
            dicionario[palavra] = 1
        }
        else{
            dicionario[palavra] += 1
        
        }
    } 
    return dicionario

} 
let palavras = ['mamao', 'abacate', 'uva', 'adol', 'abacate', 'uva', 'abacate']
let result = contadorDePalavras(palavras)
console.log(result)