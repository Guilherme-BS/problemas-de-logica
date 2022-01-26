/*dada uma string, transforme-a em int ou jogue ume erro se ela for inválida 

Caso de teste:
'21321' -> 21321
'3213129' -> 3213129
'dsa12a' -> ERROU
*/

const stringOfTest = '21321'
const validateString = (string) =>{
  let result = 0
  let potencia=10**(stringOfTest.length)
  for(let i = 0; i<string.length; i++){
    potencia = potencia / 10
    const digit = string[i]
    if(digit.charCodeAt() > 57 || digit.charCodeAt() < 48){
      return 'ERRO'
    }
    result += digit * potencia
  }
  return result
}
console.log(validateString(stringOfTest))