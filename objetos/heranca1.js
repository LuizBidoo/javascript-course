const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // acessando o protótipo do objeto pelo __proto__
console.log(ferrari.__proto__ === Object.prototype) // por padrão __proto__ == Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype)
console.log(MeuObjeto.prototype)

// EM JS, UM OBJETO SEMPRE TEM UMA REFERÊNCIA PARA SEU PROTÓTIPO (SUPER OBJETO), ASSIM QUE É DEFINIDA A HERANÇA
// O prototipo de um objeto é acessado por __proto__    