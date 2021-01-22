/*
 1 entrar no map e na lista entrada 
2 somar os conteudos da entrada 
3 comparar o os vencedores de cada rodada ()
*/

let numbers = {nomes:['pedro', 'rian'],
            entrada:[[2, 5], [4, 6], [6, 8]]}

function parouimpar ( numbers){
    for (let i = 0; i < numbers.entrada.length; i++){
        let result = numbers.entrada[i]
        let tot = result[0] + result[1]
       if (tot % 2 == 0){
           let definename = numbers.nomes[0]
            console.log(`${definename} Ganhou !! pois ${tot} e Par ! ` )
            
   
       } else {
           let definename = numbers.nomes[1]
           console.log(`${definename} Ganhou !! pois ${tot} e Impar !`)
       }
   }

}
parouimpar(numbers)
