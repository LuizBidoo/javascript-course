// Estratégias de gerar valor padrão

function soma1(a,b,c) {
    a = a || 1 // se a primeira parte for falsa retorna 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

// estrategia 2, 3 e 4 

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for diferente e undefined retorna a, senão 1
    b = 1 in arguments ? b : 1 // se o segundo arg (args[1]) da função existir (no caso o b), retorna b, senão 1
    c = isNaN(c) ? 1 : c // se c for u NaN (não for um numero) retorna 1 senão c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

function soma3(a = 1, b = 1, c = 1) { // ES 2015
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))