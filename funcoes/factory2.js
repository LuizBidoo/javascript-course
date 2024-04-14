function criarProduto(nome, preco) {
    return {
        nome, // mesma coisa que nome: nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 5999,99))
console.log(criarProduto('IPad', 3999,99))