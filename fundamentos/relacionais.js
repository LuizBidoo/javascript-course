console.log('01)', '1' == 1) // iguais apenas no valor
console.log('02)', '1' === 1) // iguais no valor e no tipo
console.log('03)', '3' != 3) // diferente
console.log('04)', '3' !== 3) // diferentes no valor ou no tipo

console.log('05)', 3 < 2)
console.log('06)', '3' > 2) // lembrando q javascript é fracamente tipada
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime == d2.getTime)
console.log('12)', d1.getTime === d2.getTime)
console.log('13)', undefined == null)
console.log('14)', undefined === null)

// via de regra: usar estritamente igual (===) para n operar tipos diferentes