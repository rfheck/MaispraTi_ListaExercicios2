// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

let workers = [
    {nome:"Tiago", cargo: "UX Designer", salario: 4500},
    {nome:"Juliana", cargo: "Suporte", salario: 2500},
    {nome:"Diego", cargo: "Dev Front-End", salario:6000},
    {nome:"Luiza", cargo: "Dev Back-End", salario:7200},
    {nome:"Gustavo", cargo: "Dev Mobile", salario:6700}
]
for(let wage of workers){
    if(wage.salario > 5000) {
        console.log(`O funcionário ${wage.nome}, ${wage.cargo}, tem o salário de ${wage.salario}.`);
    }
}