const a = {name: 'teste'}
const b = a // passagem por referência
b.name = 'Opa'
console.log(a) 
let c = 3
let d = c
d++
console.log(c)
console.log(d)
// tipos primitivos da linguagem funcionam como cópia por valor, C e D são independentes
// quando estou trabalhando com objetos a passagem é feita por referência