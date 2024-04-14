// this em arrow functions é preso ao contexto em que ela foi escrita, não varia

function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++ // this está ligado ao contexto léxico e não está variando
        console.log(this.idade)}, 1000)
}

new Pessoa