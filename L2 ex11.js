// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

let pedidos = [
    {cliente:"Rafael", produto:"RJ45", quantidade: 10},
    {cliente:"Elisa", produto:"cat6", quantidade: 20},
    {cliente:"Rodrigo", produto:"alicate", quantidade: 1},
    {cliente:"Rafael", produto:"RJ45", quantidade: 20},
    {cliente:"Elisa", produto:"cat6", quantidade: 30}
]
let agrupa = {}
pedidos.forEach(item => {
   if(agrupa[item.cliente]){
    agrupa[item.cliente]+= item.quantidade
   } else {
    agrupa[item.cliente] = item.quantidade
   }
})
console.log(agrupa)