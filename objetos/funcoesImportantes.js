const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // CHAVES DO OBJETO
console.log(Object.values(pessoa)) // VALORES DE UM OBJETO
console.log(Object.entries(pessoa)) // ENTRADAS DE UM OBJETO (Chave: Valor)

Object.entries(pessoa).forEach(([chave, valor]) => { // desestruturação das entries (chave e valor) -> (revisar destructuring)
    console.log(`${chave}: ${valor}`)
}) // podemos usar para fazer bancos de dados SQL dinâmicos

Object.defineProperty(pessoa, 'dataNascimento', { // (objeto target, nome da propriedade ENTRE CHAVES!!)
    enumerable: true, // se vai aparecer na listagem de keys
    writable: false, // se posso sobrescrever
    value: '01/01/2019' // valor
}) // posso mudar propriedades de atributos

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
console.log(dest)
const obj = Object.assign(dest, o1, o2) // Pega o objeto de destino (dest) e concatena nele os atributos dos próximos (o1 e o2 por ex)
console.log(dest) // sobrescreveu os valores em comum(dest(a) <- o2(a))

Object.freeze(obj) // trava o obj
obj.c = 1234
console.log(obj)
