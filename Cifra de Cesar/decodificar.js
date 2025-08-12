const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})




let Palavra = "QJCSP"
const alfabeto = [];
    
    for (let i = 97; i <= 122; i++) {                                                                                           
     alfabeto.push(String.fromCharCode(i).toUpperCase());
    }

function decodificar(input,letrasAlfabeto){

  const arrayDaPalavra = input.toLocaleUpperCase().split("")
  const arrayIndex = arrayDaPalavra.map(letra => letrasAlfabeto.indexOf(letra))
     
for (let i = 0; i < 26; i++){

    let palavra = ""
    let pAtual = arrayIndex
    let numerosPossiveis = pAtual.map(a=>(a + i) % 26)

    for (let a = 0; a < pAtual.length; a++){
        palavra = palavra + letrasAlfabeto[numerosPossiveis[a]]
    }
    console.log(`+ ${(i+1)} letra: ${palavra}`)
}
}

function pergunta (){

    let respostaFinal = ""

    rl.question("Deslocamento (0–25): ", (inputUsuario) => {
    const resposta = Number(inputUsuario);

     if (!Number.isInteger(resposta) || resposta < 0 || resposta > 25) {
      console.log("Por favor, digite um número inteiro entre 0 e 25!");
      return pergunta();
    }



    rl.question("Palavra para CODIFICAR: ", (inputPalavra) => {

        const arrayPalavra = inputPalavra.toUpperCase().split("");

        for (let i = 0; i < arrayPalavra.length; i++) {
            const letraAtual = arrayPalavra[i];
            let codificada = letraAtual; // padrão: mantém se não estiver no alfabeto
            for (let a = 0; a < 26; a++) {
                if (letraAtual === alfabeto[a]) {
                    codificada = alfabeto[(a + resposta) % 26]; // codificar = somar k
                    break; // achou a letra, sai do for interno
                }
            }
            respostaFinal += codificada;
        }
        console.log("Resultado:", respostaFinal)
        rl.close(); // feche o readline aqui (ou siga seu fluxo)
    });
    });
}

decodificar(Palavra,alfabeto)
console.log(pergunta())