const arredondaCerto = valor => {
    const valorEmReais = `R$ ${valor.toFixed(2).toString().replace('.',',')}` // toFixed(ajeita as casas decimais para 2 após a virgula)
                                                                             // toString().replace('.',',') -> transforma em string e troca o ponto por virgula
    console.log(valorEmReais)
}

arredondaCerto(0.1 + 0.2)