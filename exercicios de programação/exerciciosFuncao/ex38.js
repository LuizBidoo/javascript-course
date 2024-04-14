function verificaIntervalo(inicio = 0, fim = 100) {
    if(inicio > fim) {
        let tmp = inicio
        inicio = fim
        fim = tmp
        imprimeIntervalo(inicio, fim)
    } else {
        if(inicio === fim) {
            return console.log(inicio)
        } else {
            imprimeIntervalo(inicio, fim)
        }
    }
}

function imprimeIntervalo(inicio, fim) {
    for(let i = inicio; i <= fim; i++) {
        console.log(i)
    }
}

verificaIntervalo()
console.log("----------------")
verificaIntervalo(1,1)
console.log('----------------')
verificaIntervalo(10,5)