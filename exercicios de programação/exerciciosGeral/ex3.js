let horas = 180
let valor = 60
function salarioLiquido(horas, valor){
    const salario = horas * valor
    const salarioLiquido = salario - salario * 0.3
    return `Salário igual a R$ ${salarioLiquido}`
    //aprender a usar melhor o template string
}
console.log(salarioLiquido(horas, valor))