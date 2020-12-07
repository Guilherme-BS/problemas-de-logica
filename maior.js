let maior = segmaior = termaior = quartomaior = 0 
const numbers = [8, 9, 3, 15, 7]
const segNumbers = []
for( let i = 0; i < numbers.length; i++){
    if (numbers[i] > maior ){
        maior = numbers[i];
    }
    
}
/* maior = 10 number[i] = 8 segmaior = 6
10 > 8 && 8 > 6 

*/
for( let i = 0; i < numbers.length; i++){
    if (maior >  numbers[i] && numbers[i] > segmaior ){
        segmaior = numbers[i];
    }
}

console.log(maior, segmaior)
