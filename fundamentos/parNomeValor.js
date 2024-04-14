// Par chave/valor
const saudacao = 'olá'

function exec(){
    const saudacao = 'falaaa'
    return saudacao
}

const cliente = {
    nome: 'Luiz',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)