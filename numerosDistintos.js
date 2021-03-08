/** eu vou te dar uma lista de números
    quero q vc retorna a quantidade de números distintos dentro dessa lista
    [1,2,2,1,3,4,4] -> 4
    [1,2,3,4] -> 4
    [1,1] -> 1
     */

const testCase = [1,2,2,1,3,4,4] 
const testCase1 = [1,2,3,4]
const testCase2 = [1,1] 


function numerosDistintos (numeros){
    let total = 0
    let distintos = new Set(numeros)
    for (const key of distintos.values()){
        total += 1
    }
    return total 
}
console.log(numerosDistintos(testCase))
console.log(numerosDistintos(testCase1))
console.log(numerosDistintos(testCase2))
