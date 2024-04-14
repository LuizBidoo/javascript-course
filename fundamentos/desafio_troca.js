let a = 7;
let b = 94;

//a = b;
//b = a; //não vai funcionar desse jeito por que vc perde o valor de uma delas


let aux = b; // aux recebe b
b = a; // b recebe a
a = aux; // a recebe aux que é b

console.log(a);
console.log(b); 

// forma mais pratica

//[a, b] = [b, a];
//console.log(a);
//console.log(b);