function verificaFruta(carro) {
    switch (carro.toLowerCase()) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel...')
            break
    }
}

verificaFruta('Hatch')
verificaFruta('Sedan')
verificaFruta('Motocicleta')
verificaFruta('Jetski')