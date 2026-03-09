const dadosPessoais = {
    nome: 'Patrik',
    idade: 21,
    hobbies: ['Tecnologia','Basquete','Ouvir música']
}

const caracteristicas ={
    corDePele: 'Preta',
    cabelo: 'Locs',
    altura: 1.60
}

dadosPessoais.hobbies.push('Beber')

console.log('Hobbies da pessoa: ',dadosPessoais.hobbies)

console.log('Nome da pessoa: ',dadosPessoais['nome'])

dadosPessoais.caracteristicas = caracteristicas

console.log(dadosPessoais)