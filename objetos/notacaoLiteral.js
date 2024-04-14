const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // possível mudança
const obj2 = {a, b, c} // n permite mudança

console.log(obj1, obj2)

const nomeAtributo = 'Nota'
const valorAtributo = 7.87

const obj3 = {}

obj3[nomeAtributo] = valorAtributo

console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    funcao1: function () { // versao antiga
        // ...
    },
    funcao2() { // versao nova
        // ...
    }
}
console.log(obj5)