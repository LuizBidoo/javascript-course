const calculaAnuidade = (mes,valor) => {
    if(mes > 0 && mes < 13) {
        atraso = mes - 1 // faz mes - 1 para começar a partir de janeiro
        return ((valor * (1 + 5/100)**atraso)).toFixed(2) 
    } else {
        return 'Mês inválido'
    }
}

console.log(calculaAnuidade(4, 100))