// Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. 
// Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

// Sortear aleatoriamente um nome da lista de participantes.
// Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// Avaliar se o participante foi premiado ou não com base na pontuação:
// Acima de 80: "Parabéns, você foi premiado!"
// Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:

// Uma função para sortear um nome aleatoriamente.
// Uma função para exibir o nome sorteado com 2 segundos de atraso
// Uma função para avaliar a pontuação.
// Uma função final que organize o fluxo completo do sorteio.

const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];



const realizarSorteio = (lista, callback) => {
    console.log(`Sorteando...`)
    setTimeout(() => {
        callback(lista)
    }, 2000)

}

const Sorteio = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    if (lista[indice].pontuacao > 0) {
        console.log(`O participante sorteado foi o ${lista[indice].nome}\nSua pontuação foi de ${lista[indice].pontuacao} pontos.`)
        if (lista[indice].pontuacao < 50) {
            console.log(`Infelizmente, não foi dessa vez.`)
        } else if (lista[indice].pontuacao >= 50 && lista[indice].pontuacao <= 80) {
            console.log(`Você quase conseguiu! Fique de olho nos próximos sorteios.`)
        } else {
            console.log(`Parabéns, você foi premiado!`)
        }
    }
}


realizarSorteio(participantes, Sorteio)