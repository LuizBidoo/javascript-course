console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola'
console.log(obj1.nome)

function Obj(nome){ // funções podem funcionar também como classes
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

// Utilizando a notação ponto podemos acessar os membros de uma função ou de um objeto