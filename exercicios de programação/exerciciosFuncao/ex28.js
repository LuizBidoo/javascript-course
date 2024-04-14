const vet = [1,2,3,4,5,6,7,8,9,10]

const vetorPar = vet => {
    let contadorPares = 0
    let contadorImpares = 0
    for(let i = 0; i < vet.length; i++) {
        if(vet[i] % 2 == 0) {
            contadorPares++
        } else {
            contadorImpares++
        }
    }
    return `Pares: ${contadorPares}\nÍmpares: ${contadorImpares}`
}

console.log(vetorPar(vet))