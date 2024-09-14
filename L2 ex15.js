// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.
//

let transacoes = [
    {tipo:"entrada", valor: 12.5},
    {tipo:"saida", valor: 56.13},
    {tipo:"saida", valor: 10.50},
    {tipo:"entrada", valor: 80.60},
    {tipo:"entrada", valor: 74.10},   
]
let sum = 0
transacoes.forEach(item => {
        if(item.tipo == "entrada"){
            sum += item.valor}
        if(item.tipo == "saida"){
                sum -= item.valor}
        })
console.log(`O total das compras foi de R$ ${sum.toFixed(2)}.`)