let n1 = 0
let n2 = 1

function maiorOuIgual(n1,n2){
    if(typeof n1 != typeof n2){
        return false
    }else if(n1 >= n2){
        return true
    }else{
        return false
    }
}
console.log(maiorOuIgual(n1,n2))