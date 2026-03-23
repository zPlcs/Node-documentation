// Você está desenvolvendo um sistema de tarefas do dia a dia. 
// O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, 
// remova a última tarefa que foi adicionada. Escreva um programa que:

// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.
// Exemplo de entrada:

// const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
// Copiar código
// Saída esperada:

// Lista após adicionar: ['Estudar', 'Lavar roupa', 'Fazer compras', 'Pagar boletos']
// Lista após remover a última tarefa: ['Estudar', 'Lavar roupa', 'Fazer compras']

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Pagar boletos')
console.log(`Lista após adicionar: ${tarefas}`)

tarefas.pop()
console.log(`Lista após remover a última tarefa: ${tarefas}`)