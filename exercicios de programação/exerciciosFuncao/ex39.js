const swapVetores = (vetA, vetB) => {
    if(vetA.length === vetB.length) {
        for(let i = 0; i < vetA.length; i++) {
            vetA[i] = vetA[i] + vetB[i] // vetor A na posição 1 vai receber a soma das posições de A e B para depois ser subtraido o A do B
            vetB[i] = vetA[i] - vetB[i] // vetor B vai receber (vetA[i] + vetB[i]) - vetB[i] => vetA[i]
            vetA[i] = vetA[i] - vetB[i] // vetor A vai receber essa subtração que resulta no que estava em B
        }
    } else {
        return 'Tamanhos diferentes'
    }
    console.log('Novo vetor A: ' + vetA)
    console.log('Novo vetor B: ' + vetB)
}

let vetA = [1, 2, 3]
let vetB = [4, 5, 6]

swapVetores(vetA, vetB)