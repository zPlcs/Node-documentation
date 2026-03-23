// Você recebeu a missão de desenvolver um sistema de envio de notificações. 
// A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console informando que a mensagem foi enviada. 
// Escreva um programa que:

// Crie um array com uma lista de mensagens.
// Use o método forEach() para exibir uma mensagem no console para cada item da lista.
// Exemplo de entrada:

// const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
// Copiar código
// Saída esperada:

// Notificação: Pedido confirmado  
// Notificação: Pagamento aprovado  
// Notificação: Produto enviado

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado']
mensagens.forEach((mensagem,indice) =>{
    console.log(`Notificação: ${mensagem} - Indice: ${indice}`)
})