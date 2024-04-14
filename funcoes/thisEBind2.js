function Pessoa() {
    this.idade = 0

    const self = this // SELF SEMPRE APONTARÁ PRA PESSOA()
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // BIND NESSE CASO COM ESTÁ SENDO EXECUTADO DENTRO DA FUNÇÃO PESSOA, O THIS SERÁ DE DA FUNÇÃO PESSOA
}

new Pessoa