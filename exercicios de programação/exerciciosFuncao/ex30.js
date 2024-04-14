const vet = [2,3,7,120,460,22,1,40]

function vetorMaior(vet){
    vet.sort((a,b) => a-b)
    return `${vet[0]} e ${vet[vet.length-1]}`
}

console.log(vetorMaior(vet))