const readline = require ('readline')

const window  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0

console.log('Bem-vindo ao Quiz do Patrik')

window.question ('Qual o boneco favorito do Patas? \n(A) Kassadin \n(B) Sejuani \n(C) Velkoz \nResposta: ',(r1) => {
    if(r1 === 'C'){
        acertos++
    } else {
        erros++
    }
    window.question ('Qual a cor favorita do Patas? \n(A) Roxo \n(B) Vermelho \n(C) Cinza \nResposta: ', (r2) => {
        if(r2 === 'A'){
            acertos++
        } else {
            erros++
        }
        window.question('Quanto de altura o Patas tem? \n(A) 1,50m \n(B) 1,60m \n(C) 1,80m \nResposta: ', (r3) => {
            if(r3 === "B"){
                acertos++
            } else {
                erros++
            }

            if(acertos <= 1){
                console.log('Você acertou 1 ou nenhuma questão, vergonha...')
            } else if (acertos === 2){
                console.log('Você acertou metade vai, tu sabe bem')
            } else {
                console.log('Você gabaritou, vc é goti')
            }


            window.close()
        })
    })

})