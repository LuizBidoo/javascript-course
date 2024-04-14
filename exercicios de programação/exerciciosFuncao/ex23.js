function calculaMedia(n1, n2, n3, codigo) {
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a,b) => a-b)
    let mediaPonderada = ((notas[0]*4) + (notas[1]*3) + (notas[2]*3))/10

    console.log(`Código do aluno: ${codigo}`)
    console.log(`Notas: ${notas.join(', ')}`)
    console.log(`Media: ${mediaPonderada.toFixed(2)}`)
    if(mediaPonderada >= 5){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

calculaMedia(123, 2.8, 6, 3.5)

/*function comparaValores(a,b) {
    if (a == b) return 0
    else if(a > b) return 1
    else if(a < b) return -1
}*/ //-> isso é equivalente à: a-b