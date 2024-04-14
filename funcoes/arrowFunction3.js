let comparaComThis = function (param) { 
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this) // this não é o global KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK

const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora compara com this está ligado ao obj
comparaComThis(global) // this não está mais no escopo global
comparaComThis(obj) // this agora aponta pra obj

// AGORA PARA ARROW FUNCTION

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // não aponta mais normalmente pro global, pois essa função foi definida dentro de um módulo (arquivo) do node
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) 

comparaComThisArrow(obj) // vai dar false, pois a arrow function é mais forte que a função bind, ela manterá o contexto em que foi escrita
comparaComThisArrow(module.exports)