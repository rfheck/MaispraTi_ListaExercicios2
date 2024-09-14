// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

let carro = {
    modelo: "Sandero",
    marca: "Renault",
    ano: 2008,
    portas: 4
}
for(let key in carro){ 
   console.log(`${key}: ${carro[key]}`)
}
