console.log('a = ' + a) // deveria dar um erro
var a = 2 // aconteceu um içamento
console.log('a = ' + a)

function teste(){
    console.log('a = ' + a) // deveria dar um erro
    var a = 2 // aconteceu um içamento
    console.log('a = ' + a)    
}

teste()

// É SÓ UMA CURIOSIDADE, N FAÇA ISSO

console.log('b = ' + b) // vai dar erro
let b = 1
console.log('b = ' + b)

// com let o hoisting n acontece