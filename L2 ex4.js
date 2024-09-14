// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

let people = [ 
    {nome: 'Rafael', idade: 43, cidade: 'Porto Alegre'},
    {nome: 'Rodrigo', idade: 22, cidade: 'Novo Hamburgo'},
    {nome: 'Sergio', idade: 35, cidade: 'Farroupilha'},
 ]
for(let infos of people){
    console.log(`NOME: ${infos.nome},   IDADE: ${infos.idade},  CIDADE: ${infos.cidade}`)
}