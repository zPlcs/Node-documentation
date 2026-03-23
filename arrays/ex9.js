// Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. 
// Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. 
// Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.

// Para isso, você precisa:

// Criar um array com objetos contendo nome e idade de cada participante.
// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// Exibir a lista de aprovados no final.
// Exemplo de entrada:

// const participantes = [
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Carla', idade: 19 },
//   { nome: 'Daniel', idade: 15 },
//   { nome: 'Eduarda', idade: 25 }
// ];
// Copiar código
// Saída esperada:

// Acesso liberado para: Bruno
// Acesso liberado para: Carla
// Acesso liberado para: Eduarda
// Lista de aprovados: ['Bruno', 'Carla', 'Eduarda']

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];


const listaDeAprovados = participantes.filter((p) => {
    return p.idade >= 18
})


for(const pessoas of listaDeAprovados){
    console.log(`Acesso liberado para: ${pessoas.nome}`)
}

const aprovados = listaDeAprovados.map(p => p.nome);

console.log(`Lista de aprovados: ${aprovados}`)