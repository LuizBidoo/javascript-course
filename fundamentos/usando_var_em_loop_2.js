var funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // 10
funcs[8]() // 10

// pela falta de escopo de bloco, o i no momento da loop n é respeitado