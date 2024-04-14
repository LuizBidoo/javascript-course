let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]

const somaDeVetores = function(vetorPilha, vetorAdiciona) {
    for(let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }
    console.log('Vetor adicionado: ' + vetorAdiciona)
    console.log('Vetor resultado: ' + vetorPilha)
}

somaDeVetores(vetorPilha, vetorAdiciona)