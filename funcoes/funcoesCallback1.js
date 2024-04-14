const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante) => console.log(fabricante))

// Funções callback, são funções que são chamadas quando um evento acontece, nesse caso é o loop da função forEach()