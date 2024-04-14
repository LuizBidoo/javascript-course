// PI * raio * raio 

const PI = 3.14; // constantes por boa pratica é colocado em letra maiuscula 
const raio = 10; //caso esse raio não mude, poderia ser colocado como constante
let areaCirc = PI * (raio * raio); 

console.log("A área é: " + PI * (raio * raio) + " m2");

//outra forma

console.log("A área é: " + areaCirc + " m2");
console.log(Math.PI); //pi do javascript

areaCirc = Math.PI * raio * raio;
console.log("o valor da área é " + areaCirc + " m2")