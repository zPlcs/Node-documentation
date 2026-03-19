// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.
// Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

const AvaliarDesempenho = (nome, pontuacao,callback) => {
    console.log(`Pontuação: ${pontuacao}\n${callback(nome,pontuacao)}`)
}

const Mensagem = (nome, pontuacao) => {
    if (pontuacao > 0) {
        if (pontuacao >= 70) {
            return `Parabens ${nome}, você passou!`
        } else if (pontuacao >= 50 && pontuacao <= 69) {
            return `Ok... Você foi bem ${nome}, mas precisa de reforço.`
        } else if (pontuacao < 50) {
            return `Esperava mais de você ${nome}... Você foi reprovado...`
        }
    } else {
        return `Pontuação inserida não é válida.`
    }

} 

AvaliarDesempenho('Patrik',50,Mensagem)