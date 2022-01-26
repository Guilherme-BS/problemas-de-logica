function isPrimo(number){
  if(number == 1){
    return "nao e primo"
  }
  let divisores = 0
  for(let i =2; i<=number; i++){
    if(number % i == 0){
      divisores += 1
    }
  }
  if(divisores === 0){
    return "e primo"
  } else{
    return "nao e primo"
  }
}
console.log(isPrimo(9))