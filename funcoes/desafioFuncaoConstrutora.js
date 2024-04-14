class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

// Transformar essa classe em uma função construtora

function Pessoa2(nome) {
    this.nome = nome
    this.falar = function() {
        return `Meu nome é ${this.nome}` 
    }
}

const p2 = new Pessoa2('Joao')
p2.falar()

// RESUMINDO: Existem 3 abordagens para criação de instâncias (objetos) -> Função factory (função que retorna um objeto), Função construtora e Classe