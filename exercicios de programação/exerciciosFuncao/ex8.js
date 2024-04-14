let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function pontuacaoJoao (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(',') // split(',') está convertendo a string em um array dividindo o a string em posições usando a vírgula como separador
    let recordsQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i]
            recordsQuebrados++
        } else if (parseInt(pontuacoes[i]) < parseInt(maiorPontuacao)){ // parseInt(), transformando string em int
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1   
        }
    }
    return [recordsQuebrados, piorJogo]
}

console.log(pontuacaoJoao(stringPontuacoes))