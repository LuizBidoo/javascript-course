const divisivelPor3 = numero => {
    if(numero % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(4))
console.log(divisivelPor3(9))
console.log(divisivelPor3(7))
console.log(divisivelPor3(15))