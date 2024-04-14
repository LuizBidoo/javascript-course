const encontraPar = function() {
    let pares = []
    for(i = 0; i <= 100; i++){
        if(i % 2 == 0) {
            pares.push(i)
            console.log(`${i} é  par`)
        } else {
            console.log(`${i} é  ímpar`)
        }
    }
    return pares
}

console.log(encontraPar())