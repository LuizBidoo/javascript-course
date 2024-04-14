function negativosNoVetor(vet) {
    let qtdDeNegativos = 0
    for(let i = 0; i < vet.length; i++) {
        if(vet[i] < 0) {
            qtdDeNegativos++
        }
    }
    return qtdDeNegativos
}

const vet = [1,-1,4,-4,3,-3,0,-5]

console.log(negativosNoVetor(vet))
