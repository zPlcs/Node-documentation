// Você está criando um sistema para controlar os gastos mensais da sua casa. 
// Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

// Escreva um programa que:

// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.
// Exemplo de entrada:

// const despesas = [120, 80, 45.5, 200, 60];
// Copiar código
// Saída esperada:

// Total de despesas: R$ 505.5

const despesas = [120, 80, 45.5, 200, 60];
let totalDespesas = 0

for(let i = 0;i < despesas.length;i++){
    console.log(despesas[i])
    totalDespesas = totalDespesas + despesas[i]
}

console.log(`Total de despesas: R$${totalDespesas}`)
