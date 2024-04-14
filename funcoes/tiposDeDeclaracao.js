console.log(soma(3,4))
//console.log(subtracao(4,3)) -> essa sintaxe não é válida, pois a function expression trabalha com variáveis, que são carregadas, durante]
// a execução do código, assim como a named function expression

// function declaration
function soma(x,y) {
    return x + y
}

// function expression
const subtracao = function(x,y) {
    return x - y
}

// named function expression
const mult = function mult(x,y) { // não é muito utilizada
    return x * y
}

// function declaration pode ser chamada antes de ser declarada