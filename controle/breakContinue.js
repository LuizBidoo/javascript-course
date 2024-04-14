const array = [1,2,3,4,5,6,7,8,9,10]

for(let x in array) {
    if(x == 5)
        break // RELACIONADO COM O FOR E NÃO COM O IF
    console.log(`${x} = ${array[x]}`)
}

console.log("-------------------------")

for(let y in array) {
    if(y == 5)
        continue // interrompe apenas a repetição em que y = 5 e pula pra próxima
    console.log(`${y} = ${array[y]}`)
}

console.log("-------------------------")

externo: for(let a in array) { // NÃO USE!!
    for(let b in array) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}