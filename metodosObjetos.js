const pessoa = {
    nome: 'Patrik',
    idade: 21,
    altura: 1.60,
    hobbies: ['Jogar basquete','Ouvir música']
}

for (const key in pessoa){
    console.log('Chave: ',key)
    console.log('Valor: ',pessoa[key])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)

const entradas = Object.entries(pessoa)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entradas (chave/valor): ', entradas)