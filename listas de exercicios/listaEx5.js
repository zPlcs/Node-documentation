// 1. Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
const saudacao = () => {
    console.log('Olá! Seja bem-vindo(a)!')
}


// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."
const apresentarPessoa = (nome, idade) => {
    console.log('Olá, meu nome é',nome,'e tenho',idade,'anos')
}

// 3. Cálculo de IMC
// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:

// IMC = peso / (altura * altura)

// A função deve retornar o valor do IMC.
// Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.
const calcularIMC = (peso, altura) => {
    let IMC = peso/(altura*altura)
    return console.log('Seu imc é: ',IMC)
}


// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
const verficarAprovacao = (nota) => {
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

// 5. Número par ou ímpar
// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. 
// Teste a função com diferentes valores.
const ehPar = (num) => {
    if(num%2 === 0){
        return true
    } else {
        return false
    }
}


// 6. Função soma
// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console 
// com uma frase completa.
const Soma = (num1, num2) => {
    let calc = num1 + num2
    return console.log(num1, '+', num2, 'é igual a', calc)
}

// 7. Reutilizando código
// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
// A função deve receber dois parâmetros: valorCompra e valorPago.

// A função deve:

// calcular o valor do troco
// retornar o valor calculado
// Depois, utilize o retorno da função para exibir o valor do troco no console.
const calcularTroco = (valorCompra, valorPago) => {
    let valorTroco = valorPago - valorCompra
    return console.log('Valor do troco: ',valorTroco)
}



// 8. Arrow function
// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
const Adicao = (num1,num2) => console.log(num1, '+', num2, 'é igual a',num1+num2)


// 9. Callback simples
// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. 
// Teste passando uma função que imprime "Executando ação!".
const executarAcao = (acao) => {
    return acao()
}

const acao = () => {
    return console.log('Executando ação!')
}



// 10. Desafio do quiz
// Crie uma função fazerPergunta(pergunta, respostaCorreta). 
// A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada 
// (simule a resposta com uma variável).
const fazerPergunta = (pergunta, respostaCorreta) =>{
        console.log(pergunta)
        let resposta = 'Luiz'
        if(resposta === respostaCorreta){
            console.log('Você acertou')
        } else {
            console.log('Você errou')
        }
}

fazerPergunta('Qual o meu nome?','Patrik')