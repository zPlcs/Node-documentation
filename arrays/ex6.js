// Você está desenvolvendo um sistema de pedidos online. 
// Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. 
// Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.
// Exemplo de entrada:

// const pedidos = ['camiseta', 'calça', 'tênis'];
// Copiar código
// Saída esperada:

// Array original: ['camiseta', 'calça', 'tênis']
// Array copiado: ['camiseta', 'calça', 'tênis', 'boné']

const pedidos = ['camiseta', 'calça', 'tênis'];

const pedidosCopia = [...pedidos]
pedidosCopia.push('boné')

console.log(pedidosCopia)