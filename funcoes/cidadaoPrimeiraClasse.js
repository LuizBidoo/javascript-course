// Função em JS é um First-Class Object (Citizen)
// High-order function
// JS trata a função como um dado

// criar funcao de uma forma literal

function fun1() {  }  // retorno é opcional  

// armazenar funções em variáveis

const fun2 = function () { }

// armazenar funções dentro de um array

const array =  [function (a,b) { return a + b } , fun1(), fun2() ]

console.log(array[0](2,3))

// Armazenar funções em atributos de objetos

const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// passando função como parâmetro para outra

function run(fun) {
    fun()
}

run(function() { console.log('Executando') })

// Uma função pode retornar/conter uma função

function soma(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}

soma(2,3)(4) // é o parâmetro da função interna
const cincoMais = soma(2,3)
cincoMais(4)