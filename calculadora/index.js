import { createInterface } from 'readline'
import { Soma, Subtracao, Multiplicacao, Divisao } from './operacoes.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro número: \n>',(n1) => {
    leitor.question('Insira a operação: \n(+) Soma\n(-) Subtração\n(*) Multiplicação\n(/) Divisão\n>',(operacao) => {

        leitor.question('Digite o segundo número: \n>', (n2) => {

            let num1 = Number(n1)
            let num2 = Number(n2)

            if(operacao === '+'){
                console.log(Soma(num1,num2))
            } else if (operacao === '-'){
                console.log(Subtracao(num1,num2))
            } else if (operacao === '*'){
                console.log(Multiplicacao(num1,num2))
            } else if(operacao === '/'){
                console.log(Divisao(num1,num2))
            } else {
                console.log('Operador invalido')
            }
            leitor.close()
        })
    })
})