// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [
    {titulo: "Top Gun: Maverick", diretor: "Joseph Kosinski", anoLancamento: 2022},
    {titulo: "Whiplash", diretor: "Damien Chazelle", anoLancamento: 2014},
    {titulo: "Twisters", diretor: " Lee Isaac Chung", anoLancamento: 2024}
]

const titulos = []
filmes.forEach(title => {
    titulos.push(title.titulo)
})
console.log(titulos)
