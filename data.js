const agora = new Date()
console.log(agora)
const mes = 1+agora.getMonth()
const hora = agora.getHours()
const minutos = agora.getMinutes()

const dataFormatada = agora.getDate()+'/'+mes+'/'+agora.getFullYear()
const horaFormatada = hora+':'+minutos


console.log(dataFormatada+' '+horaFormatada)

const nascimento = new Date('2004-05-31:09:30:00.000Z')
console.log(nascimento)

const nascimentoFormatadoBR = nascimento.toLocaleDateString('pt-BR')
const nascimentoFormatadoUS = nascimento.toLocaleDateString('en-US')

console.log(nascimentoFormatadoBR)
console.log(nascimentoFormatadoUS)