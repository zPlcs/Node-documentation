const pessoa = {
    nome: 'Patrik',
    idade: 21,
    profissao:'Desenvolvedor'
}

//spread, literalmente espalha as informações do objeto em questão, para outro objeto (pessoa2 = {dadosAnteriores pessoa})
const pessoa2 = {...pessoa}

//rest, literalmente o que sobra de um objeto, removendo alguma parte do objeto principal (retiro o nome, mas deixo o restante do objeto pessoa)
const {nome, ...restante} = pessoa
console.log(nome)
console.log(restante)

