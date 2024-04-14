const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // primeiro uma operacao relacional (ou qualquer outra q retorne v ou f), ? se verdadeiro aprova senao reprova

console.log(resultado(7.1))
console.log(resultado(6.9))