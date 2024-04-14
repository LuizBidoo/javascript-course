const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // acessando a saudacao do objeto do qual a função faz parte
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // sempre a partir dessa funcao, this será de pessoa
falarDePessoa()

// Nesse caso o Bind é um método responsável por amarrar um objeto pra ele ser o dono da execução daquele método
// sempre que ele for chamado

// Bind não altera a função dentro do objeto, ela só amarra o objeto a chamada