const prod1 = {} // forma literal de criar um objeto = Objetos em JavaScript é um cojunto de chaves e valores
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Existe essa notação mas evite atributos com espaço

console.log(prod1)

const prod2 = { // Outro objeto
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// posso criar objetos dentro de objetos

const prod3 = {
    nome: 'tchunflay',
    preco: 28.70,
    obj: {
        blabla: 888
    }
}

console.log(prod3)

// podemos colocar funções como atributos. Ex: uma função preço com desconto que mostra o preço com um desconto

// JSON é diferente de Objeto