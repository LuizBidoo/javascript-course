let contador = 1
console.log('For em formato de while:')
while(contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}
console.log('For:')
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i = 0; i < notas.length; i++){
    console.log(`Notas: ${notas[i]}`)
}