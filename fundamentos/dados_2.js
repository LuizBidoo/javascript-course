//cuidado com a nomenclatura

let preco = 19.90
let desconto = 0.4

console.log(preco * (1 - desconto)) //prioridade de operações
let precoComDesconto = preco * (1-desconto)
console.log(precoComDesconto)

let nome = "Caderno"
let categoria = "Papelaria"
console.log("Produto: " + nome + 
            ", Preco: " + preco +
            ", Desconto: " + desconto +
            ", Preço com Desconto: " + precoComDesconto +
            ", Categoria: " + categoria); //concatenação de texto em uma sentença

// Texto com soma faz uma concatenação

console.log("1" + 1) // texto + valor faz uma concatenação de texto