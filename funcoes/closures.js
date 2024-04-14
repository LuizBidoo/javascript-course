// Closure: o escopo criado quando você define sua função
// Esse escopo permite a função acessar e manipular variáveis externas a função 

// Contexto léxico em ação 

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x // vai ser o x = 'local' por causa que dentro() foi declarada dentro do escopo de fora()
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao()) 