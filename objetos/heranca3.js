const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // Criou um objeto filha1 já apontando como protótipo o pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} // atributo com suas características
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não vai mudar pois nome: { writable: false }
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) // aparece o nome pois nome: {enumerable: true}

for(let key in filha2) { // verificar se os atributos fazem parte do objeto ou se veio da cadeia de herança
    filha2.hasOwnProperty(key) ? // se filha 2 tiver a propriedade dentro de si mesma
        console.log(key) : console.log(`${key} é por herança`)
}