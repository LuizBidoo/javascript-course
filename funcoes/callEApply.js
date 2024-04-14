// 2 formas diferentes de se chamar funções

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4590,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // NaN this.preco e this.desconto não definidos
globalThis.preco = 20
globalThis.desc = 0.1 // usando o this global
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // call(contexto, params da função chamada)
console.log(getPreco.apply(carro, [0.17, '$'])) // apply(contexto, [params da funcao chamada]) 