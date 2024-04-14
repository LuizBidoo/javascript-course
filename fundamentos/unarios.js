let num1 = 1
let num2 = 2

num1++ // forma pósfixada
console.log(num1)
--num1 // forma prefixada
console.log(num1)

// forma prefixada tem precedência sobre a posfixada

console.log(++num1 === num2--) // da verdadeiro pq o ++num1 foi executado antes da comparação
console.log(num1 === num2)