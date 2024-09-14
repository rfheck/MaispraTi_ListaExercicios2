// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    {produto: "fita adesiva", quantidade: 80, minimo: 20},
    {produto: "borracha", quantidade: 15, minimo:20},
    {produto: "caneta azul", quantidade: 32, minimo: 50},
    {produto: "papel a4", quantidade: 30, minimo: 10},
    {produto: "cola branca", quantidade: 19, minimo: 20},
]
estoque.forEach(item => {
    if(item.quantidade < item.minimo){
        item.quantidade *= 2
    }
})
console.log(estoque)