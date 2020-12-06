const readline = require(`readline-sync`)
let number = Number(readline.question(`Digite um valor: `))
let quadrado = number * number
console.log(`${number}²= ${quadrado} ou ${number} x ${number} = ${quadrado}`)