function anoBissexto(ano) {
    if(ano % 4 === 0 && ano % 100 === 0){
        console.log('É ano bissexto')
        return true
    } else if(ano % 4 === 0){
        console.log('É ano bissexto')
        return true
    } else if(ano % 100 === 0) {
        console.log('Não é ano bissexto')
        return false
    } else {
        console.log('Não é ano bissexto')
        return false
    }
}