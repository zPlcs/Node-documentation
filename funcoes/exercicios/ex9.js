// // Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica 
// de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, 
// classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

// Sua missão é criar três funções separadas, com responsabilidades bem definidas:


// calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: 
// consumo = (potencia × horasPorDia × 30) / 1000

// classificarConsumo(consumo): Retorna a classificação com base na tabela: *

// exibirResumo(nomeAparelho, consumo, classificacao): Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é 
// classificada como Consumo moderado."


const ExibirResumo = (nomeAparelho,consumo,classificacao) => {
    console.log(`O aparelho ${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}.`)
}

const CalcularConsumo = (potencia, horasPorDia) => {
    let consumo = (potencia*horasPorDia*30)/1000
    return consumo
}


const ClassificarConsumo = (consumo) => {
    if(consumo > 0){
        if(consumo < 50){
            return `Baixo consumo`
        } else if (consumo >= 50 && consumo <= 199){
            return `Consumo moderado`
        } else {
            return `Alto consumo`
        }
    } else {
        return `Valor de consumo inválido`
    }
}

ExibirResumo('Frigobar',CalcularConsumo(150,4),ClassificarConsumo(CalcularConsumo(150,4)))


