let teste = {nomes:['pedro', 'rian'],
            entrada:[[2, 5], [4, 6], [6, 8]]}

for (let i = 0; i < teste.entrada.length;i ++){
    let result = teste.entrada[i]
    let tot = result[0] + result[1]
    if (tot % 2 == 0){
        let vencedor = teste.nomes[0]
        console.log(`O ${vencedor} veceu pois ${tot} e par`)
    }
    else{
        let vencedor = teste.nomes[1]
        console.log(`O ${vencedor} venceu pois ${tot} e impar`)
    }
 }
 