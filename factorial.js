const  testCase = [5, 3 ,2]

function calculaFactorial (numbers){
    totalDoFatorial = 1
    for(let i = 1; i <= numbers ; i++){
        totalDoFatorial *= i
    }
    return totalDoFatorial
}

function somadeFactorial (factorial){
    let totaldosFactorials = 0
    for (let i = 0; i < factorial.length; i ++){
        totaldosFactorials += calculaFactorial(factorial[i])
    }
    return totaldosFactorials
}
console.log(somadeFactorial(testCase))