
let listaNumbers = [1, 6, 9, 8, 90, 132 ]



function maioresNumbers(num){

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