
let listaNumbers = [1, 6, 9, 8, 90, 132 ]



/*function maioresNumbers(num){
    let maior = segmaior = termaior = 0
    for(let i = 0; i < num.length; i++){
        if (num[i] > maior){
            maior = num[i]
        }
    }
    for(let i = 0; i < num.length; i++){
        if (maior > num[i] && num[i] > segmaior){
            segmaior = num[i]
        }
    }
    for( let i = 0; i < num.length; i++){
        if (segmaior > num[i] && num[i] > termaior){
            termaior = num[i]
        }
    }
    console.log(maior, segmaior, termaior)
}
maioresNumbers(listaNumbers)
*/

function getSecondLargest(nums) {
    // Complete the function
    let maior = 0
    let segMaior = 0
    for(let n of nums){
        if(n > maior){
            maior = n
        }
    }
    for(let n of nums){
        if(maior > n && segMaior < n){
            segMaior = n
        }
    }
    return segMaior
}
const testeCase = [1 ,2, 3 ,4 ,5 ,6 ,7 ,8 ,9, 10]
console.log(getSecondLargest(testeCase))