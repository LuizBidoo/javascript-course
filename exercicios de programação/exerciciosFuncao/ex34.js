const comparaStrings = function(palavra1, palavra2) {
    let isValid = true
    palavra1 = palavra1.toLowerCase()
    palavra2 = palavra2.toLowerCase()
    for(let i = 0; i < palavra1.length; i++) {
        if(palavra2.includes(palavra1[i]) == false){
            isValid = false
            break
        }
    }
    return isValid
}

console.log(comparaStrings('abcdf', 'dcba'))
