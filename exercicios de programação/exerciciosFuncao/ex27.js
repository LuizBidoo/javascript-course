function calculaAltura(crianca1, crianca2) {
    let tempo = 0
    if(crianca1.altura === crianca2.altura) {
        if(crianca1.taxa > crianca2.taxa){
            return 'A criança 1 passou a altura da criança 2 em 1 ano'
        } else if(crianca2.taxa > crianca1.taxa) {
            return 'A criança 2 passou a altura da criança 1 em 1 ano'
        } else {
            return 'As crianças terão a mesma altura sempre'
        }
    } else {
        if(crianca1.altura > crianca2.altura){
            if(crianca1.taxa >= crianca2.taxa) {
                return 'A criança 2 nunca passará a altura da criança 1'
            } else {
                return `A criança 2 passou a altura da criança 1 um em ${calculaTempo(crianca1.altura, crianca1.taxa, crianca2.altura, crianca2.taxa)} ano(s)` 
            }
        } else {
            if(crianca2.taxa >= crianca1.taxa) {
                return 'A criança 1 nunca passará a altura da criança 2'
            } else {
                return `A criança 1 passou a altura da criança 2 em ${calculaTempo(crianca2.altura, crianca2.taxa, crianca1.altura, crianca1.taxa)} ano(s)`
            }
        }
    }
}

let crianca1 = {
    altura: 140,
    taxa: 3
};

let crianca2 = {
    altura: 150,
    taxa: 2
};

function calculaTempo(alturaMaior, taxaMaior, alturaMenor, taxaMenor) {
    let qtdAnos = 0
    while(alturaMaior > alturaMenor) {
        alturaMaior += taxaMaior
        alturaMenor += taxaMenor
        qtdAnos++
    }
    return qtdAnos
}

console.log(calculaAltura(crianca1, crianca2))