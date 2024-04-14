// função fatory é uma função que retorna um objeto
// Factory simples
function criarPessoa() {
    return { // esse retorno implica na criação de novos objetos
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}   

console.log(criarPessoa())