const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gera um numero aleatório de 1 a 100

let RespostaDoComputador = Math.floor(Math.random() * 100) + 1; // gera  um numero aleatório de  1 a 100
console.log(RespostaDoComputador);

let numeroAleatócrioMaior = Math.random() *100 // gera numero aleatório e multiplica por 100
console.log(numeroAleatócrioMaior)

let numeroAleatório  = Math.random()  // gera um numero aleatorio de 0 a 1 (obs: o numero 1 nunca é gerado)
console.log(numeroAleatório)

let arredonda = Math.floor(0,5) // Math floor arredonda para baixo
console.log(arredonda)

