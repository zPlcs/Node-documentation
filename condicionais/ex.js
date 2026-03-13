// const salario = 9050

// if(salario < 3999){
//     console.log(salario*0.09)
// } else if (salario >= 4000 && salario < 6999){
//     console.log(salario*0.07)
// } else if (salario >= 7000 && salario <10999){
//     console.log(salario*0.05)
// } else if (salario >= 11000) {
//     console.log(salario*0.03)
// } else {
//     console.log('Salario invalido')
// }

// const ano = 2024

// if(((ano%4 === 0 && ano%100!== 0)) || (ano%100 === 0 && ano%400 === 0)){
//     console.log(`${ano} é bissexto`)
// } else {
//     console.log(`${ano} não é bissexto`)
// }

// const estudante = 'Patrik'
// const n1 = 4
// const f1 = 1

// const bonusEstudantil = (n1 >= 8) && (f1 <= 2) 
//     ?   console.log(`Bonús garantido para ${estudante}`)
//     :   console.log('Aluno com nota ou presença insuficiente')

const usuario = {
    nome: 'Patrik',
    lvDeAcesso: 0

}

switch (usuario.lvDeAcesso) {
    case 1:
        console.log('Usuário Free: Acesso limitado')
        break
    case 2:
        console.log('Usuario Premium: Tem acesso a todas as funções')
        break
    case 3:
        console.log('Usuário Ultimate: Tem acesso a todas as funções e bônus especiais')
        break
    default:
        console.log('Nivel de acesso inválido')
} 