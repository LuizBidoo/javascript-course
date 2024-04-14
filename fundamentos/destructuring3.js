function rand({min = 0, max = 1000}) { // desestruturando um objeto com valores padrões de minimo e maximo entre 0 e 1000
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand({max: 50, min: 40}))
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) -> vai dar um erro pq você não estará desestruturando nada nos parâmetro da função criada 