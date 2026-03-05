const idade = 19

//Faz a comparação no aspecto booleano, mas 
//Caso a comparação seja com:
//null, 0, "" (string vazia), NaN ou undefined
//Retorna como falsy, se não thuthy
if (idade != null){
    if (idade >= 18){
        console.log('Maior de idade')
    } else{
        console.log('Menor de idade')
    }
}

if(undefined || NaN || 0 || "" || 0){
    console.log("Falso")
    //Cairá como falso e não ira imprimir
}

if('Oie'){
    console.log('Verdadeiro')
}