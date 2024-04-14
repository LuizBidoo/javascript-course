// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2) // b tratado como undefined
imprimirSoma(1,2,3,4,5,6) // pega os 2 primeiros só
imprimirSoma() // a e b são undefineds

// javascript é mto flexivel com passagem de parâmetros

// Função com retorno

function soma(a, b = 0) { // b = 0, como padrão se b n for passado na chamada da função
    return a + b
}

console.log(soma(1,2))
console.log(soma(1))
console.log(soma())
const result = soma(3,4)
console.log(result)