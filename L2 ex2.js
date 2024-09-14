// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    }
    
for(let key in livro){
    if(livro.hasOwnProperty("editora")){
        console.log("existe a propriedade editora no objeto")
        } else {
        livro.editora = "Éditions Gallimard"
        }
     }
console.log(livro)