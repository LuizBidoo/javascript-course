const calculadora = (x,operacao,y) => {
    switch(operacao) {
        case '+':
            return x+y
        case '-':
            return x-y
        case '*':
            return x*y
        case '/':
            return x/y
        default:
            return `${operacao} é uma operação inválida`
    }
}

console.log(calculadora(3,'+',2))
console.log(calculadora(3,'-',2))
console.log(calculadora(3,'*',2))
console.log(calculadora(3,'/',2))
console.log(calculadora(3,'|',2))



