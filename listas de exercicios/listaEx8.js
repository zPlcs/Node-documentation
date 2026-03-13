// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const pessoa = {
    nome:'Patrik',
    idade: 21,
    email: 'email'
}

const {nome,idade,email} = pessoa

console.log(nome,idade,email)

// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
const lings = ['JavaScript','Java','C++']

const [ling1,ling2,ling3] = lings
console.log(ling1)


// 3. Rest operator em função
// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
// Utilize um laço for para somar todos os valores recebidos e retorne o total.



const Calc = (...nums) =>{
    let result = 0
    for(let i = 0;i < nums.length;i++){
        result += nums[i]
    }
    return result
}

console.log(Calc(1,2,3,4))


// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.
const frutas1 = ['Maça','Abacaxi','Laranja']
const frutas2 = ['Pessego','Kiwi','Melancia']

const todasAsFrutas = [...frutas1,...frutas2]

console.log(todasAsFrutas)


// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const objeto1 = {
    nome:'Patrik'
}
const objeto2 = {
    idade:21
}

const pessoa2 = {...objeto1,...objeto2}
console.log(pessoa2)


// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
const Saudacao = (nome) => {
    if(nome){
        console.log('Olá',nome)
    } else {
        console.log('Olá, visitante')
    }
}

Saudacao('Patrik')


// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const data = new Date()
const dataFormatada = data.toLocaleDateString('pt-BR')
console.log(dataFormatada)

// 8. Modularização com export/import
// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).
export const Soma = (n1,n2) => {
    return n1+n2
} 

import {Soma} from 'listaEx8.js'
// 9. Objeto com função construtora
// Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.
function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);




// 10. Método no objeto
// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando 
// concatenação de strings.

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
  };
}

const livro = new Livro('Livro1', 'Machado de assis')
console.log(livro.descrever());
