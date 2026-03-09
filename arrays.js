const frutas = [
    'Banana',
    'Melancia',
    'Morango',
    'Maracuja'
]

console.log(frutas[0])
console.log(frutas.length)
frutas.push('Melão')
console.log(frutas[frutas.length-1])

//Para retirar itens de um array, selecionamos o indice e quantos indices após o indice escolhido, será removido
frutas.splice(2,1)

console.log('\nUsando for: ')
for(let i = 0;i < frutas.length; i++){
    console.log('Indice: ',i,'\nNome: ',frutas[i])
}


console.log('\nUsando forEach:')
frutas.forEach((valor, indice) => {
    console.log('Indice: ',indice,'\nValor: ',valor)
})

console.log('\nUsando for of:')
for(const fruta of frutas){
    console.log('Valor: ',fruta)
}

const nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

const numsPares = nums.filter((valor) => {return valor%2 === 0})
const numsImpares = nums.filter((valor) => {return valor%2 !== 0})
const numsVezesDois = nums.map((valor) => {return valor*2})

console.log('Todos os números: ', nums)
console.log('Números Pares: ',numsPares)
console.log('Números Impares: ',numsImpares)
console.log('Números mapeados (dobrados): ',numsVezesDois)
