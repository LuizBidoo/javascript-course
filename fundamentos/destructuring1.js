// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua B',
        numero: 123
    }
}

// podemos retirar atributos usando variáveis e atribuição simples via notação ponto
// porém o destructuring consegue tirar de dentro da estrutura 2 atributos

const { nome, idade } = pessoa // tire de dentro do obj pessoa os atributos nome e idade 
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // tirando os atributos do objeto pessoa e atribuindo eles a variáveis n e i
console.log(n, i)

// e se retirarmos algo que não está dentro do obj

const { sobrenome, bemHumorada = true } = pessoa // atribuímos o padrão de bemHumorada como true, caso não tenha dentro do objeto, será sempre true

console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // desestruturação do objeto endereço dentro de pessoa
console.log(logradouro, numero, cep)