function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel } // objeto para retornar todas as variáveis
                                                                        // os nomes dos atributos foram omitidos por causa de uma facilidade da linguagem
                                                                        // as chaves dos atributo é o próprio nome da constante 
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))