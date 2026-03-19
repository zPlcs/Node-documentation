// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. 
// Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? 
// E aí? Como vai implementar esse desafio?

// Exemplo de entrada:

// calcularFrete(3);
// Copiar código
// calcularFrete(12);
// Copiar código
// Saída esperada:

// 5
// Copiar código
// 6

const CalcularFrete = (n1) => {
    if(n1 <= 5 && n1 >= 0){
        console.log(`Frete de R$5.00`)
    } else if(n1 >= 5.1 && n1 <= 20){
        console.log(`Frete de R$${n1*0.5}`)
    } else if (n1 >20){
        console.log(`Frete de R$20.00`)
    } else {
        console.log(`Valor inserido inválido`)
    }
}

CalcularFrete(12)