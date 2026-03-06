//HOF -> Higher-Order Function -> Função que recebe outra função como parâmetro

//Função que recebe como parametros, valor1, valor2 e uma função , sendo assim uma HOF
const Calculadora = (n1,n2,Operacao) => {
    return Operacao(n1,n2)
}

//As operações são os callbacks (argumentos/contextos) para a nossa HOF 
const Soma = (n1,n2) => n1+n2
const Subtracao = (n1,n2) => n1-n2
const Divisao = (n1,n2) => n1/n2
const Multiplicacao = (n1,n2) => n1*n2

console.log(Calculadora(10,2,Multiplicacao))