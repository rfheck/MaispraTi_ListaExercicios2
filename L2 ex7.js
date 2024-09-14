// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

let produtos = [
    {nome:"Baquetas", preco: 95, desconto: 0.20},
    {nome:"Cordas", preco: 63, desconto: 0.20},
    {nome:"Palhetas", preco: 3, desconto: 0.20}
]
let novoPreco = 0   
let novoDesconto = 0.10
produtos.forEach(item => {
    novoPreco = item.preco - (item.preco * novoDesconto)
    item.preco = novoPreco
    item.desconto = novoDesconto
})
console.log(`Pagamento à vista, ${novoDesconto*100}% de desconto.`)
console.table(produtos) 