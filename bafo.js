// entrar na primeira camada da lista 
// criar uma function e passar o resultado do for como parametro 
// fazer outro for e entrar em mais uma camada da lista 
// criar variaveis `aldo ` e `beto` recebendo 0 
// criar mais um for pra varrer as posicoes dos numeros e somalos nas variaveis aldo e beto  
const testCase = [
    [
      [11, 5],
      [2, 3],
    ],
    [
      [0, 0],
      [4, 7],
      [10, 0],
    ],
    [
        [2, 0],
        [0, 2],
        [2, 2],
      ],
];
function selectWinner (partidas){
    //console.log(partidas)
    for (let i = 0; i < partidas.length; i++){
        let aldo = 0
        let beto = 0
        for (let j = 0; j < partidas[i].length; j++){
            aldo += partidas[j][0]
            beto += partidas[j][1]
            

        }
        if (beto < aldo){

            return `Aldo`
        } 
        else if (beto == aldo){
            return `Empate`
        }
        else{
            return `Beto`
        }

    }
}

for(let i = 0; i < testCase.length;i ++){
    console.log(`Teste ${i + 1}`)
    console.log(selectWinner(testCase[i]))

}