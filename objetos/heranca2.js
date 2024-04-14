// Cadeia de protótipos
Object.prototype.attr0 = 'Z' // NÃO FAÇA ISSO

const avo = { attr1: 'A' } // prototipo: Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} // prototipo: avo
const filho = { __proto__: pai, attr3: 'C' } // prototipo: pai

console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log(filho.attr0)
console.log(filho.attrA)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) { // this é usado para calcular atributos da instância
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Esse atributo vai sombrear (sobrescrever) o atributo do protótipo carro
}

const volvo = {
    modelo: 'V40',
    status() { // Shadowing a função status de carro
        return `${this.modelo}: ${super.status()}` // super referencia o protótipo 
    }
}

Object.setPrototypeOf(ferrari, carro) // estabelecendo uma relação: carro -> ferrari (ferrar terá, carro como protótipo)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())