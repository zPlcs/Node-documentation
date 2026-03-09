// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
const nomes =[
    'Patrik',
    'Luiz',
    'Maria',
    'Clara',
    'Fernanda'
]

for(let i = 0; i<nomes.length;i++){
    console.log(nomes[i])
}


// 2. Adicionar e remover itens
// Comece com um array de frutas. 
// Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.
const frutas = [
    'Melancia',
    'Morango',
    'Maracuja'
]

console.log('Frutas antes',frutas)
frutas.push('Caju')
frutas.shift(0)
console.log('Frutas depois',frutas)



// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.
const cidades = [
    'São Paulo',
    'Santos',
    'Praia Grande'
]

console.log(cidades.length)

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
const nums = [1,2,3,4,5,6,7,8,9,10]
let somaNums = 0
for(let i = 0;i < nums.length;i++){
    somaNums += nums[i]
}

console.log(somaNums)

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma 
// mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
const notas = [5,4,2,9]

let soma = 0
for(let i = 0;i < notas.length;i++){
    soma = soma + notas[i]
}

let calc = soma/notas.length
console.log(calc)

// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.
const usuarios = [
    'Patrik',
    'Luiz',
    'Maria',
    'Raissa'
]

usuarios.forEach((valor, indice) => {
    console.log('Olá ',valor)
})

// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de 
// desconto em cada um e mostre os preços com desconto.
const produtos = [
    30,40,60,100
]

const produtosDesconto = produtos.map((valor)=>{
    return valor = valor - valor*0.10
})

console.log(produtosDesconto)

// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
const idades = [8,18,21,23,25]

const maiorIdades = idades.filter((valor) => {return valor >= 18})
console.log(maiorIdades)

// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.

// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.
const carrinho = [
    30,70,80,120,245
]

let valorTotal = 0
for(preco of carrinho){
    valorTotal = valorTotal + preco
    let desconto = valorTotal - valorTotal*0.2
    console.log(desconto)
}


// 10. Lista de tarefas
// Crie dois arrays:

// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

const bool = [
    true,
    false,
    false,
    true
]

const tarefas = [
    'Marcotti',
    'Datrino',
    'Daniel',
    'Leonardo'
]

const tarefasPendentes = bool.filter((valor,indice) => {return valor !== true})
console.log(tarefasPendentes)