const idade = 18
const crianca = 10
const adolescente = 17
const idoso = 60

//Interrogação serve como "if" e dois pontos como "else"
idade >= 18 ? console.log('Você é maior de idade') : console.log('Você é menor de idade.')

//Após a primeira condicional, os proximos "else", funcionam como "if-else"
idade <= crianca ? console.log('Você é uma criança.') : 
    idade <= adolescente ? console.log('Você é um adolescente') : 
        console.log('Você é um idoso.')