function calculaSalario(plano, salario) {
    switch(plano.toLowerCase()){
        case 'a':
            console.log(`Novo salário: R$${0.10*salario + salario}`)
            break
        case 'b':
            console.log(`Novo salário: R$${0.15*salario + salario}`)
            break
        case 'c':
            console.log(`Novo salário: R$${0.20*salario + salario}`)
            break
        default:
            console.log('Plano inválido')
            break
    }
}

calculaSalario('A', 1200)
calculaSalario('B', 1200)
calculaSalario('C', 1200)
calculaSalario('D', 1200)