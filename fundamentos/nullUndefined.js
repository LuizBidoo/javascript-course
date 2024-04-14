let valor // não foi inicializada mas foi declarada
console.log(valor)

valor = null // ausência de valor; detalhe: valor foi inicializada
console.log(valor)
//console.log(valor.toString()) -> ERRO

const prod = {}

console.log(prod.preco)
console.log(prod)

prod.preco = 4.60

console.log(prod.preco)

prod.preco = undefined // n faça isso, evite

console.log(!!prod.preco)
// delete prod.preco -> use essa estratégia para deletar atributos
console.log(prod)

prod.preco = null // sem preco
console.log(!!prod.preco)
console.log(prod)