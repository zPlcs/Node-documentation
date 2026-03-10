// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.
const pessoal = {
    nome: 'Patrik',
    idade: 21,
    profissao: 'Desenvolvedor'
}

// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
console.log(pessoal.nome)

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.
pessoal.idade = 23
console.log(pessoal.idade)

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".
pessoal.cidade = 'São Paulo'
console.log(pessoal)

// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.
const func = (pessoal) => {
    console.log('Olá, meu nome é:',pessoal.nome,'Tenho',pessoal.idade,'anos de idade e sou',pessoal.profissao)
}

func(pessoal)

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoas = [
    {nome: 'Lucas',idade: 20,profissao:'Médico'},
    {nome: 'Patrik',idade: 17,profissao:'Desenvolvedor'},
    {nome: 'Maria',idade: 20,profissao:'Designer Gráfica'},
]


// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
const pessoasFilter = pessoas.filter((value) => {return value.idade >= 18})
console.log(pessoasFilter)

// 8. Objeto com método
// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem 
// fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.



const usuario = {
    nome:'Patrik',
    saudacao: saudacao = () => {
    console.log('Olá!',usuario.nome)
}
}

usuario.saudacao()


// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
for(const dados in pessoal){
    console.log('propriedades:', pessoal[dados])
    console.log('Dados:', dados)
}


// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
const produto = {
    preco: 1000,
    quantidade: 34
}

const calc = produto.preco*produto.quantidade