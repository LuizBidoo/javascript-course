const cardapio = (codigo, qtd) => {
    switch (codigo) {
        case 100:
            console.log('Cachorro quente: R$3,00')
            return 3 * qtd
        case 200:
            console.log('Hambúrguer simples: R$4,00')
            return 4 * qtd
        case 300:
            console.log('Cheeseburguer: R$5,50')
            return 5.50 * qtd
        case 400:
            console.log('Bauru: R$7,50')
            return 7.50 * qtd
        case 500:
            console.log('Refrigerante: R$3,50')
            return 3.50 * qtd
        case 600:
            console.log('Suco: R$2,80')
            return 2.8 * qtd
        default:
            console.log('Código inexistente')     
    }
}

console.log(cardapio(200, 2))