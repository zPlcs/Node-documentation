// Imagine que você está desenvolvendo uma interface de atendimento online.
// Quando o usuário envia uma pergunta, o sistema precisa simular que está 
// "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.

const ResponderUsuario = (nome, callback) => {
    console.log(`Processando pergunta de ${nome}...`)
    setTimeout(() => {
        console.log(callback(nome))
    }, 3000)

}

const Resposta = (nome) => {
    return `Olá, ${nome}! Aqui está a resposta para sua dúvida.`
}

ResponderUsuario('Patrik', Resposta)