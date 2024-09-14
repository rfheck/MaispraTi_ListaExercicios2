// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

function passou(materia, nota){
    return {
        materia,
        nota,
    }
}
const boletim = {
    portugues: 8,
    matematica: 7.5,
    historia: 8.5,
    educacao_fisica: 5,
    artes: 9.5,
    fisica: 6.5,
    quimica: 7.5,
    religiao: 4.5
}
//console.log(boletim)

for(let key in boletim){
    if(boletim[key] >= 7){
       let acimaDeSete = passou(key, boletim[key])
       console.log(acimaDeSete)
     }
}