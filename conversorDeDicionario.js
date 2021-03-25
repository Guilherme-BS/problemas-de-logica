/*
tranforme um dicionario em listas de lista
exemplo:
{1:2,10:11} -> [[1,2],[10,11]] ou [[10,11],[1,2]]


1 varrer o dicionario 
2 pra cada elemento no dicionario tenho que criar um novo array e o adicionalo 
3 feito isso preciso adicionar todos os arrays anteriores a um array pai 
*/

const dicionario = {1:2,10:11, 30:1, 40:3}



function conversorDeDicionarioPraArray(dict){
    let resultados = []
    Object.keys(dict).forEach(chaveDoDict => {
        let lista = new Array(chaveDoDict , dict[chaveDoDict])
        resultados.push(lista)
    });
    return resultados
}
console.log(conversorDeDicionarioPraArray(dicionario))

