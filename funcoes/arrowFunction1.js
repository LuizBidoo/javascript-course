let dobro = function (a) { return 2 * a }

dobro = (a) => { return 2 * a } // função arrow é sempre uma função anônima, por isso, sempre deve ser guardada em uma variável

dobro = a =>  2 * a // se tiver apenas um parâmetro, pode ser escrita sem parenteses. E pode-se usar o fato de que quando tiramos
                    // as chaves temos um retorno implícito em funções de uma única linha
console.log(dobro(Math.PI))

let ola = function () {
    console.log('Olá')
}

ola = () => 'Olá'

console.log(ola())