const multiplicaVetor = (vet, inteiro) => {
    for(let i = 0; i < vet.length; i++) {
        vet[i] = vet[i] * inteiro
    }
    return vet
}

function multiplicaVetorMaiorQue5(vet, inteiro) {
    if(inteiro <= 5) {
        return `O inteiro ${inteiro}, não pode ser utilizado`
    } else {
        for(let i = 0; i < vet.length; i++) {
            vet[i] = vet[i] * inteiro
        }
    }
    return vet
}

console.log(multiplicaVetor([1,2,3,4,5],5))
console.log(multiplicaVetor([1,2,3,4,5],0))
console.log(multiplicaVetorMaiorQue5([1,2,3,4,5],0))
console.log(multiplicaVetorMaiorQue5([1,2,3,4,5],5))
console.log(multiplicaVetorMaiorQue5([1,2,3,4,5],10))


