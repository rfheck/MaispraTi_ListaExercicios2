// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

let students = [
    {nome:"Tiago", nota1: 5, nota2:7},
    {nome:"Juliana", nota1: 8, nota2: 9.5},
    {nome:"Diego", nota1: 6.5, nota2:8}
]
let media = 0
for(let average of students){
    media = (average.nota1 + average.nota2) / 2
    console.log(`${average.nome}: média ${media}.`)
}