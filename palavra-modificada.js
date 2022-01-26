/*dada uma palavra, empurra cada letra n posições p frente
ex:
"abc", 2 -> "cde"
Primo : "xyz", 5 -> "cde*/

const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t','u','v','w','y','z']

const aumentaLetra = (palavra,n,alfabeto) =>{
  const listOfModific = []
  for(letra of palavra){
    for(let i = 0; i < alfabeto.length; i++){
      if(letra === alfabeto[i]){
        listOfModific.push(alfabeto[i+n])
      }
    }
  }
  return listOfModific
}
console.log(aumentaLetra('acb',5,alfabeto))