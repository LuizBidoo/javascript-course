function avaliaAluno(nota){
    let notaArredondada = arredondaNota(nota)
    if(notaArredondada >= 40){
        return console.log(`Aprovado com ${nota}`)
    } else {
        return console.log(`Reprovado com ${nota}`)
    }
}

function arredondaNota(nota) {
    if(nota % 5 > 2) { // se o resto da divisão inteira for maior que 2 quer dizer que o múltiplo de 5 mais próximo não é menor que 3
        return nota + (5 - (nota % 5)) // arrendondamento pro próximo múltiplo de 5
    } else {
        return nota
    }
}

avaliaAluno(59)