{ 
    { 
        { 
            {   
                var sera = 'Será??????' 
                console.log(sera) 
            } 
        } 
    } 
}

console.log(sera)

// Escopo: local onde a variável é visível (acessível)
// Uma varíavel definida com var tem só 2 escopos posíveis: Global ou Escopo de função

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) // Quando você define uma varíavel dentro da função, o escopo dela é apenas dentro da função