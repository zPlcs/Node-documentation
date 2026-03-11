const cores = ['Azul','Vermelho','Verde']

const maisCores = ['Cinza','Preto','Branco']

//Spread, juntamos duas arrays
const todasAsCores = [...cores, ...maisCores]

//Rest, separamos os dois primeiros itens da lista, e deixamos o restante
const [primeiraCor, segundaCor, ...restante] = todasAsCores

console.log(restante)