

const beto = [
    [2 ,3],
    [0, 4, 10],
    [1, 3]
]
const aldo = [
    [5, 3], 
    [0, 7, 0],
    [3, 1]
]

function somaRodadas(match) {
    let total = 0

    for (let j = 0; j < match.length; j++ ){
        total += match[j]
    }

    return total
}

function logarTotalPorPartidas(userMatches) {
    for (let i = 0; i < userMatches.length; i++ ) {
        const match = userMatches[i]
        const total = somaRodadas(match)
        console.log(total)
    }
}

function verificaVencedor(partidaBeto, partidaAldo) {
    const betoTotal = somaRodadas(partidaBeto)
    const aldoTotal = somaRodadas(partidaAldo)

    if (betoTotal == aldoTotal) {
        console.log('Empate')
    } else if (betoTotal > aldoTotal) {
        console.log('Beto ganhou')
    } else {
        console.log('Aldo ganhou')
    }
}


for (let i = 0; i < beto.length; i++){
  const partidaBeto = beto[i]
    const partidaAldo = aldo[i]

    verificaVencedor(partidaBeto, partidaAldo)
}
