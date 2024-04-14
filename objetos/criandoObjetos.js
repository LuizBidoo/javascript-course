// usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) { // se eu quiser acessar o nome de uma certa instância eu posso mas o preco e o desconto não
    this.nome = nome // atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.90, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, qtdFaltas) {
    return {
        nome,
        salarioBase,
        qtdFaltas,
        getSalario() {
            return (salarioBase/30) * (30 - qtdFaltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)

// Uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)