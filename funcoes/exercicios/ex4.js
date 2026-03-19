// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. 
// Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — 
// mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar
// Exemplo de entrada:

// verificarParidade(8);

// Ou:

// verificarParidade(5);

// Saída esperada:

// Par

// Ou:

// Ímpar

const VerificarParidade = (n1) => {
    if(n1%2===0){
        console.log(`Par`)
    } else {
        console.log(`Ímpar`)
    }
}

VerificarParidade(2)