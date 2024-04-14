const calculaMedia = vet => {
    let soma = 0
    for(let i = 0; i < vet.length; i++) {
        soma += vet[i]
    }
    return soma/vet.length
}

const vet = [1,2,3,4,5,6,7,8,9,10]

console.log(calculaMedia(vet))