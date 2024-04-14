const vet = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

const verificaIntervalo = function(vet) {
    let qtdNoIntervalo = 0
    for(let i = 0; i < vet.length; i++) {
        if(vet[i] >= 10 && vet[i] <= 20) {
            qtdNoIntervalo++
        }
    }
    return `${qtdNoIntervalo} estão no intervalo de [10,20]`
}

console.log(verificaIntervalo(vet))