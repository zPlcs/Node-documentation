//Importamos uma biblioteca
const readline = require('readline')

//Atribuimos o comando de abrir interface, a uma variável
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Iniciamos uma função da biblioteca, onde passamos o texto a ser exibido, algum parametro e uma função de callback
leitor.question('Qual o seu nome?', (nome) =>{
    console.log('Olá',nome)
    leitor.question('Quantos anos você tem?',(idade)=>{
        if(idade < 18){
            console.log('Você é menor de idade e não pode beber.')
        } else {
            console.log('Você é maior de idade, se for sexta-feira, já pega uma Beats!')
        }
        //Fechamos a interface que criamos
        leitor.close()
    })
    
})