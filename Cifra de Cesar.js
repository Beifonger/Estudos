let palavra = "Mangas"; // define uma variavel para palavra que eu quero cifrar
let resposta = criarCifra(palavra); // define uma variavel para o outpu da minha função 

console.log(resposta) // Imprime no terminal a resposta da cifragem

function criarCifra(x) { // Cria uma function com o parametro x sendco puxado de fora!
   console.log(x)

    let arrayDaPalavra = x.toUpperCase().split(""); // Tranforma uma palavra em um array divididos por letras e maiusculas
    console.log(arrayDaPalavra)

    const alfabeto = []; // cria um array para armazenar o alfabeto
    
    for (let i = 97; i <= 122; i++) { // cria uma repetição: começa; 97, termina; se i for maior ou igual a 122, soma; 1 a cada vez que roda
     alfabeto.push(String.fromCharCode(i).toUpperCase()); // Adiciona ao array alfabeto uma string a, b, c ... e dps A, B, C...  
    }
    console.log(alfabeto)

    let letrasAprovadas = ""; // cria uma variavel para receber as novas letras que passarem pelo for abaixo

    for (let i = 0; i < x.length; i++) { // repetição de 1 a o tamanho do array da palavra selecianada para cifrar
        let letra = arrayDaPalavra[i]; // seleciona a primeira letra do array mangas e dps a 2, 3, 4...
        console.log(i+ " - " +  letra)
        for (let a = 0; a < 26; a++) { // repertição do 1 ao 26
            console.log(a + " - " + alfabeto[a])
            if (letra === alfabeto[a]) { // compara cada letra da minha palavra com todas as letras do alfabeto
                let novaLetra = alfabeto[(a + 3) % 26]; // cria variavel para substituir a letra atual
                letrasAprovadas += novaLetra; // adiciona a novaLetra a variavel letras Aprovadas
                console.log(i+ " - " + letrasAprovadas)
            }
        }
    }
    console.log(letrasAprovadas)
    return letrasAprovadas; // faz com que a resposta da função seja letrasAprovadas.
}
