let mesEscolhido = 4

function nomeDoMes(mesEscolhido){
    const meses = ["Janeiro", "Feveiro", "Março", "Abril", "Maio",
            "Junho", "Julho", "Agosto", "Setembro", "Outubro",
            "Novembro", "Dezembro"]
    return meses[mesEscolhido - 1]
}

console.log(nomeDoMes(mesEscolhido))