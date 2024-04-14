function calculaValor(idade) {
    if (idade < 10)
        return 180
    else if (idade >= 10 && idade <= 30)
        return 150
    else if (idade > 30 && idade <= 60)
        return 195
    else if (idade > 60)
        return 230
}

console.log(calculaValor(8));
console.log(calculaValor(15));
console.log(calculaValor(35));
console.log(calculaValor(52));
console.log(calculaValor(80));

// com ifs mais simples
function calculaValor2(idade) {
    if (idade < 10)
        return 180
    else if(idade <= 30)
        return 150
    else if(idade <= 60)
        return 195
    else
        return 230
}

console.log('--------------------------')
console.log(calculaValor2(8));
console.log(calculaValor2(15));
console.log(calculaValor2(35));
console.log(calculaValor2(52));
console.log(calculaValor2(80));