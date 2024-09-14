// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const empresa = {
    departamentos:[
       {nome: "Dpto. Produção", funcionarios: [
          { nome:"Carlos", cargo:"Diretor"},
          { nome:"Maria", cargo:"Secretária"},
        ],},
        {nome:"Dpto. Publicidade", funcionarios: [
          { nome:"Rodolfo", cargo:"Diretor de Arte"},
          { nome:"José", cargo:"Redator"},
        ], },
        {nome:"Vendas", funcionarios: [
          {nome: "Luiza", cargo:"Diretora Comercial"},
          {nome:"Jorge", cargo:"Gerente de Vendas"},
        ],},
    ],
};
for(let i in empresa.departamentos){
    let deptos = empresa.departamentos[i]
    console.log(`Departamento - ${deptos.nome}:`)
    for(let func of deptos.funcionarios){
        console.log(`${func.nome}, ${func.cargo}.`)
    }
}
