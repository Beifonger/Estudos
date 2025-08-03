// Criar Set

const { console } = require("inspector");

const frutas = new Set(["manga","uva","banana","banana", "abacate", ]); // é como um array que tranforma valores repetidos em 1.
console.log(frutas) // valor banana foi convertido em 1 só

frutas.add("torta") // adiciona o valor "torta"
console.log(frutas)

frutas.delete("uva") // deleta o valor "uva"
console.log(frutas)

let buscar = frutas.has("manga") // buscar por manga
console.log(buscar)

for (const i of frutas){  // i = valores atual do Set; frutas = nome do Set a ser percorido; 
    console.log(i)
}

// tentando simulando um Array com propiedades de um Set

const MeuArray = simulandoSet()
function simulandoSet(){
    const simulando = Array.from({length:5},(_,a) => Math.floor(Math.random() * 10) + 1)
    console.log(simulando)

for (i = simulando.length - 1; i >= 0; i--){
    console.log(i)
    simulando
    const repeticao = simulando.filter(a=>a === simulando[i]).length
    console.log(repeticao)

    if(repeticao > 1){
        simulando.splice(i,1)  
    }
}
console.log(simulando)
}







                

              

                    