function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado: só no escopo da função
    let velocidadeAtual = 0

    // metodo publco
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function() { // função para dar acesso ao atributo privado da funcao (this torna publico)
        return velocidadeAtual
    }

}

const uno = new Carro() // aqui estão sendo usados os parâmetros padrões
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // aqui estão sendo usados parâmetros passados pelo usuário
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)