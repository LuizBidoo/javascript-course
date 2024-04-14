const valor = 'Global'

function minhaFuncao() { 
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Vai imprimir 'Global' pois na execucao de minhaFuncao() o contexto léxico faz com que a variável valor guarde 'Global'

// A função carrega consigo o local onde ela foi definida e o seu contexto