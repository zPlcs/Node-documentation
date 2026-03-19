// Imagine que você está criando uma função que simula o processamento de um pedido em um site. 
// Após o processamento, você quer que uma mensagem personalizada seja exibida — 
// mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

// o nome do cliente,
// o tipo do cliente (vip, novo ou comum),
// e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

const ProcessarPedido = (nome, nivel, mensagem) => {
    console.log(`Processando pedido de ${nome}...\n${mensagem(nome, nivel)}`)
}


const Mensagem = (nome, nivel) => {
    if(nivel === 'vip'){
        return `Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`
        
    } else if(nivel === 'novo'){
        return `Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`
        
    } else if (nivel === 'comum'){
        return `Obrigado pela sua compra, ${nome}!`
        
    } else {
        return `Nível de cliente não reconhecido ou indefinido.`
        
    }
}

ProcessarPedido('Patrik','vip',Mensagem)