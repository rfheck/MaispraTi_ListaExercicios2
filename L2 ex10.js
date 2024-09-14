// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

let vendas = [
    {produto:"pão", quantidade: 10, valor: 1.20}, 
    {produto:"sabonete", quantidade: 3, valor: 3.59}, 
    {produto:"leite", quantidade: 6, valor: 4.22}, 
    {produto:"arroz", quantidade: 2, valor: 6.15}, 
]

let total = 0
let sum = 0
vendas.forEach(item => {
    sum = (item.quantidade * item.valor)
    total += sum
    })
console.log(`O total das compras foi de R$${total.toFixed(2)}.`)