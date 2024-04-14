function verificaFruta(fruta) {
    switch (fruta.toLowerCase()) {
        case 'maça':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos em escassez de kiwi')
            break
        case 'melancia':
            console.log('Aqui está, 3 reais o quilo')
            break
        default:
            console.log('ErRo...')
            break
    }
}

verificaFruta('Maça')
verificaFruta('Kiwi')
verificaFruta('Melancia')
verificaFruta('Laranja')