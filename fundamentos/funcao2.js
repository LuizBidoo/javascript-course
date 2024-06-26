// Armazenando uma função em uma variável

const imprimirSoma = function (a,b) { // função anônima, função sem nome
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável // arrow function (param) => { function body }
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// Retorno implícito

const subtracao = (a,b) => a - b

console.log(subtracao(2,1)) 