// pessoa -> 123 -> {...} // CONSTANTE PESSOA SEMPRE DEVERIA APONTAR PRA 123
const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // não deixa mais mudar o objeto

pessoa.nome = 'Maria'
pessoa.end = 'RUA ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'}) // Endereço e objeto constantes
pessoaConstante.nome = 'Carlos'
console.log(pessoaConstante)

