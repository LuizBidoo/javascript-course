function classificaTriangulo(tamanho1,tamanho2,tamanho3) {
    if(tamanho1 == tamanho2 && tamanho2 == tamanho3) {
        return 'Esse é um triângulo equilátero'
    } else if(tamanho1 == tamanho2 || tamanho2 == tamanho3 || tamanho1 == tamanho3){
        return 'Esse é um triângulo isóceles'
    } else {
        return 'Esse é um triângulo escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));
