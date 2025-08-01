const { arrayBuffer } = require("stream/consumers");

// Variaveis
let fruta1 = "banana" 
let fruta2 = "manga"
let fruta3 = "uva"

// Array (é um tipo de objeto com propiedades especiais)

const frutas = ["maçã", "banana", "uva"]; 

// é como se cria-se um objeto com chaves numéricas, assim:

const objetoFrutas = {
  0: "maçã",
  1: "banana",
  2: "uva",
  length: 3
}

//Maneiras de se criar um Array
const vazio1 = [];
const numeros1 = [1, 2, 3];

const letras = Array.of("a", "b", "c"); // gera um array com o que está dentro de ()
console.log(letras)

const tamanho5 = new Array(5);         // gera um array com 5 casas [ , , , , ]
console.log(tamanho5)

// tipos de variaveis aplicaveis em um Array

const vazio = [] // vazio
const numeros = [1,2,3,4] // numebers
const misto = ["texto", 5, true] // String , number , booleanos(true/false)
const objeto = [{nome:"gabriel"}, {nome:"maria"}] // Objeto


// acesso a elementos do Array

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

// Acessar valores

let cores = ["azul","verde","vermelho","preto"]
console.log(cores)
console.log(cores.length) // conta quantos valores tem o array
console.log(cores[2].length) // conta quantas letras tem a palavra 2(vermelho) do array tem

// principais métodos para modificar Arrays

cores.push("branco") // adiciona no final
console.log(cores)

cores.pop(); // remove do final
console.log(cores)

cores.unshift("roxo") // adiciona ao primeiro
console.log(cores)

cores.shift(); // remove primeiro
console.log(cores)

cores.splice(0,2,"nova cor", "novo verde") // 0 = começa, 2 = quantidade, " " = adiciona 
console.log(cores)

const pedaco = cores.slice(0,2) // copia parte de um array. sintaxe (inicio, fim)
console.log(pedaco)

const comidas = ["pão", "carne", "frango"]
const bebidas = ["Coca", "Agua", "torta"]

const juntos = comidas.concat(bebidas) // junta Arrays
console.log(juntos)


console.log(cores)
const coresinvertidas = cores.reverse() // inverte ondem dos valores
console.log(coresinvertidas)

const numerosdesorganizados = [1,5,4,2,6,2,7,2,8,10,20]
const ordenar = numerosdesorganizados.sort((a,b)=> a - b) // organiza valores(se a - b = + troca lugares)
console.log(ordenar)

const palavra = ["mangoloco", "ma", "abacaxi" ,"dodecagono"]
const ordenarpalavras = palavra.sort()
console.log(ordenarpalavras)


// Buscar e verificar

cores = ["azul","verde","vermelho","preto","azul","roxo"]

indice = cores.indexOf("azul") // retorna o indice ou -1(caso não encontre!)
console.log(indice)
indice = cores.indexOf("amarelo") // -1 pq amaralo n existe no arrat cores
console.log(indice)
indiceFinal = cores.lastIndexOf("azul")// retorna o indice ou -1 só que procura de trás para frente
console.log(indiceFinal)

verificação = cores.includes("vermelho"); //  vermelho está incluido no array cores? return booleanos(true/false)
console.log(verificação)

cores.forEach((variavelDoArray, i) => { // Executa uma função em cada item (sem retornar nada): geralmente uso para listar!
  console.log(`cor ${i + 1}: ${variavelDoArray}`)
})

let coresEmCach = cores.map(a => a.toUpperCase()); // passa por cada item da função e executa a função, e retorna um novo array.
console.log(coresEmCach)

let filtro = cores.filter(cor => cor[0].includes("v"));
console.log(filtro)

let achar = cores.find(f=>f === "azul"); // retorna o primeiro item que satifaz a condição, e retorna o dado.
console.log(achar)

let acharNumero = cores.findIndex(a => a === "vermelho") // busca o primeiro item que satifaz a condição, e retorna o index.
console.log(acharNumero)

// .redece

let numerosArray = [5, 4, 3, 1, 2].sort((a, b) => a - b);
console.log("Array ordenado:", numerosArray);

let soma = numerosArray.reduce((acumulador, valorAtual,indice, numerosArray) => acumulador + valorAtual, 0)
console.log("Soma total:", soma);

let valor1 = numerosArray.some(n=> n > 3) // tem um numero maior que 3, retorna booleanos(true/false)
console.log(valor1)

let valortodos = numerosArray.every(n=> n > 0) // todos os numeros do array prenchem a condição da função?, retorna booleanos(true/false)
console.log(valortodos)

const arrayEmString = cores.join(" ") // tranforma o array em uma string separa pele que esta entre ()
console.log(arrayEmString)

const objetos = "O meu carro é uma bosta"
const stringEmArray = objetos.split(" ") // separa minha string em um array com base no que está entre () 
console.log(stringEmArray)

// Criar arrays progamaticamente

const gerando = Array.from({length:10},(_,i)=> i + 2); // cria um array com com a quantidade do primeiro valor da matrix, executa função a cada vez que roda!
console.log(gerando)
// obs: use o .from quando não tiver um array mas algo parecido. use o .map quando já tiver um array

const pessoas = [
  { nome: "Ana", idade: 20 }, // dados vinculada a objetos
  { nome: "Maria", idade: 15 },
  { nome: "Bia", idade: 45 },
  { nome: "sandra", idade: 55 },
  { nome: "Loira", idade: 11 },
  { nome: "Pamela", idade: 30 }

];

const nomes = pessoas.map(p => p.nome);   // passa por todo o array e abre o objeto nome
const maiores = pessoas.filter(p => p.idade > 21); // filtra pessoas que tem mais de 21 anos e retorna o dado inteiro

console.log(nomes)
console.log(maiores)