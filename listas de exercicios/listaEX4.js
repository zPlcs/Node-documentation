// 1. Contador de 1 a 10
// Use um for para mostrar no console os números de 1 até 10, um por linha.

for(let i = 1; i <= 10;i++){
    console.log(i)
}

// 2. Soma de 1 a 100
// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.
let soma = 0

for(let i = 1; i<=100;i++){
    soma = soma + i
}

console.log('A soma total de números de 1 a 100 é de: ',soma)

// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
for(let i = 1; i<= 10;i++){
    let num = 5
    console.log(num*i)
}


// 4. Contagem regressiva
// Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
let i = 10
while(i >= 0){
    console.log(i)
    i--
}
console.log('Contagem finalizada.')

// 5. Receber números até digitar 0
// Simule a digitação de números usando uma variável numeroDigitado.
// Use um do...while para repetir a execução até que o valor seja 0.
// Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

let i2 = 10
do {
    console.log('Digitos: ',i2)
    i2--
} while(i2 >= 0)
    console.log('Total digitados: ',11)

// 📌 Observação:
// Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.

// 6. Jogo do número secreto
// Crie uma variável numeroSecreto com valor fixo.
// Simule até 3 tentativas usando um for.
// Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:
const numeroSecreto = 2
for(let i = 1; i <= 3;i++){
    if(i===numeroSecreto){
        console.log('Acertou')
        break
    } else {
        console.log('Tente novamente')
    }
}


// "Acertou!" se for igual
// "Tente novamente" se for diferente
// 📌 Observação:
// As tentativas devem ser simuladas por variáveis dentro do laço.

// 7. Idade ao longo dos anos
// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.
let anoNascimento = 2004
let anoAtual = 2026
let idade = anoAtual - anoNascimento

for(let i = 1;i<=idade;i++){
    console.log(i)
}

// 8. Listando números pares
// Mostre todos os números pares entre 1 e 50 usando for.
for(let i = 1;i <= 50;i++){
    if(i%2===0){
        console.log(i)
    }
}


// 9. Contar múltiplos de 3 entre 1 e 100
// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.
let calc = 0
for(let i = 1; i<= 100; i++){
    
    if(i%3===0){
        calc = calc+1
    }
}
console.log('Total de números divisiveis por 3:', calc)

// 10. Menu com repetição
// Crie uma variável opcao.
// Use um do...while para exibir repetidamente as opções:
let opcao = 0

do{
    if(opcao===1){
        console.log('1 - Ver Saldo')
    } else if (opcao===2){
        console.log('2 - Fazer depósito')
    } else if (opcao===3){
        console.log('3 - Sair')
    } else {
        console.log('Opção inválida.')
    }
    opcao++
} while (opcao <= 3)
// 1 - Ver saldo
// 2 - Fazer depósito
// 3 - Sair
// O menu deve continuar sendo exibido até que a opção seja 3.
// Mostre no console a ação correspondente a cada opção.

// 📌 Observação:
// A escolha da opção deve ser simulada por valores atribuídos à variável opcao.