const pessoa = {
    nome: 'Patrik',
    idade: 21,
    profissao:'Desenvolvedor'
}
const salada = ['Alface','Cebola','Tomate']

//Destrinchamos a array salada, e deixamos claro que os dois primeiros indices da nossa array, se chamam ing1 e ing2
const [ingrediente1, ingrediente2] = salada

//Destrinchamos nosso objeto e isolamos o nome do objeto principal
const { nome } = pessoa

console.log(ingrediente1)

//Aqui, destrinchamos um dado do objeto, deixando claro que ele que será um futuro argumento usado para execução da função
const Saudacao = ({ nome }) => {
    console.log('Olá',nome)
}

Saudacao(pessoa)