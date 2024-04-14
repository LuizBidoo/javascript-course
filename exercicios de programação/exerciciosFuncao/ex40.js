Number.prototype.entre = function(inicio, fim) { // SERÁ EXPLICADO EM ORIENTAÇÃO A OBJETOS
    return this >= inicio && this <= fim
}

function conceitos(nota) {
    if(nota.entre(0.0, 4.9))
        return 'D'
    else if(nota.entre(5.0, 6.9))
        return 'C'
    else if(nota.entre(7.0, 8.9))
        return 'B'
    else if(nota.entre(9.0, 10))
        return 'A'
    else
        return 'Nota inválida'
}

console.log(conceitos(2.3))
console.log(conceitos(6.2))
console.log(conceitos(7.4))
console.log(conceitos(9.5))
console.log(conceitos(11))
