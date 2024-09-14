// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

let carrinho = {itens:[
{nome:"molho tomate", quantidade: 2, precoUnitario: 3.5},
{nome:"creme de leite", quantidade: 4, precoUnitario: 4.28},
{nome:"sabao roupa", quantidade: 1, precoUnitario: 33.40},
{nome:"refrigerante", quantidade: 2, precoUnitario: 6.98},
{nome:"pao sanduiche", quantidade: 2, precoUnitario: 13.65},
{nome:"iogurte", quantidade: 6, precoUnitario: 2.42}
]}
let total = 0
sum = 0
carrinho.itens.forEach(item => {
    sum = item.quantidade * item.precoUnitario
    /*console.log(sum)*/
    total += sum
})
console.log(`O valor total do carrinho é R$ ${total.toFixed(2)}!`)