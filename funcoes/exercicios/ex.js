// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. 
// A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

// Exemplo de entrada:

// calcularMedia(7, 9);

// Saída esperada:

// 8

const CalcularMedia = (n1,n2) => {
    let media = (n1+n2)/2
    console.log(`Sua média é: ${media}`)
}

CalcularMedia(7,9)