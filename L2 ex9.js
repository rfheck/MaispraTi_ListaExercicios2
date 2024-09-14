// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

let clients = [
    {nome: "Luis", idade:45, cidade:"Laguna"},
    {nome: "Mariane", idade:39, cidade:"São Paulo"},
    {nome: "Gabriel", idade:31, cidade:"Gravataí"},
    {nome: "Carolina", idade:29, cidade:"Porto Alegre"}
]
let qty = 0
clients.forEach(element => {
    if(element.idade > 30){
        qty++
    }
})
console.log(`${qty} clientes tem mais de 30 anos`)