/*Mergulho perigoso 

Alguns voluntários se dispuseram a fazer um mergulho em um lago bem perigoso.
Nossa função e garantir que todos eles voltaram em segurança. 

Dada uma entrada onde vc tem  na posição 0 o numero de mergulhadores que entraram na água, 
e na posição  1 o numero de mergulhadores que retornaram do mergulho. 

[6,4]

nossa primeira tarefa e discobrir se todos os mergulhadores restornaram . 
  a segunda tarfa consiste em informa o número de todos os mergulhadores que não retornaram , baseado na segunda lista da entrada. 

[1,2,5,4]

Nossa função e retornar quais mergulhadores não retornaram.
 passo 1: entrar na lista 
 passo 2: subtrair a primeira posicao pela segunda 
 
 entrada 
 [1,2,5,4]
saida
3,6
 */
 

 const testCase = [6, 4]
 let voltaram = [1,2,5,4]

 function confereMergulhador (mergulhadores){    
    return mergulhadores[0] == mergulhadores[1]
    

 }
console.log(confereMergulhador(testCase))
 
function mergulhadoresSumidos (desceram,voltaram){
    for (let i = 1; i <= desceram; i++){ 
        let achou = false
        for (let j = 0;j < voltaram.length; j++){
            if (i == voltaram[j]){
                achou = true
                break
            }
        }
        if (achou == false){
            console.log(i)
        }
        
    } 
    
}
mergulhadoresSumidos(8,voltaram )