const fatorial = function(num) {
    if(num === 0 || num === 1){
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(1))
console.log(fatorial(0))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))

