function MeuObjeto() {}
console.log(typeof MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // todos os objeto criados por uma função construtora apontam para um mesmo __proto__
console.log(MeuObjeto.prototype === obj1.__proto__) // quando se cria um objeto a partir de uma função construtora com a palavra reservada
                                                    // 'new', o protótipo desse objeto aponta para FunçãoConstutora.prototype
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// RESUMO DE TUDO
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // __proto__ da instância nova de MeuObjeto aponta para o atributo prototype da função construtora MeuObjeto
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // Object.prototype é o último objeto da cadeia de protótipos