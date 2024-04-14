// Uma das técnicas para manter o encapsulamento é por meio de métodos Setters (para mudar esses atributos privados)
// e Getters (para pegar esses atributos privados)

const sequencia = {
    _valor: 1, // _ = convenção que diz q essa variável é pretendida ser acessada apenas internamente (privado)
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor)
            this._valor = valor // so aceita valores a frente do valor anterior
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) 
