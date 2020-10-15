// Valores primitivos
// Um valor primitivo é um valor que não possui propriedades ou métodos.
// JavaScript define 5 tipos de tipos de dados primitivos:
// string
// number
// boolean
// null
// undefined

// Em JavaScript, com exceção dos valores primitivos. Quase "tudo" é um objeto.



const ele = "Alvares Cabral";
console.log(ele)



console.log("------------------------------------------")

// Os objetos também são variáveis. Mas os objetos podem conter muitos valores.
// Os valores são escritos como pares nome: valor (nome e valor separados por dois pontos).

// Exemplo 2: Um objeto
const livro = {
    nome: "Dom Casmurro",
    autor: "Machado de Assis",
    idioma: "Português",
    dataPublicacao: 1899    
};
console.log(livro)



console.log("------------------------------------------")

/* 
    Propriedades do objeto

Os valores nomeados, em objetos JavaScript, são chamados de propriedades.

PROPRIEDADE      VALOR
nome            Alvares
sobrenome       Cabral
idade           36
corDosOlhos     Castanhos      
*/     

const disciplina = {
    nome: 'Programação Client-Side',
    cargaHoraria: 230,
    turno: "Manhã"
};
console.log(disciplina)


console.log("------------------------------------------")
/* 
    Métodos de Objetos

Métodos são ações que podem ser executadas em objetos.
As propriedades do objeto podem ser valores primitivos, outros objetos ou funções.
Um método de objeto é uma propriedade de objeto que contém uma definição de função .

Exemplo: 
*/
const aluno = {
    nome: "Alvares",
    sobrenome: "Cabral",
    idade: 36,
    corDosOlhos: "Castanhos",
    nomeCompleto: function() {return this.nome + " " + this.sobrenome;}
};
console.log(aluno.nomeCompleto())



console.log("------------------------------------------")

/* 
    Criando e usando um objeto literal

Um literal de objeto é uma lista de pares nome: valor (como idade: 50) entre chaves {}.

Exemplo:
*/

const carro = { marca: "Chevrolet", modelo: "D20", anoFabricacao: 1992, cor: "Branco"};
console.log(carro)



// Temos um objeto com quatro propriedades
// Espaços e quebras de linha não são importantes. 
// Uma definição de objeto pode abranger várias linhas

console.log("------------------------------------------")

//    Usando a palavra-chave new
// O método abaixo não é recomendado pois perde em 
// simplicidade, legibilidade e velocidade de execução

let moto = new Object();
moto.marca = "Honda";
moto.modelo = "Turuna";
moto.anoFabricacao = 1981;
moto.cilindradas = 125;

console.log(moto)

console.log(`Eu tenho uma ${moto.modelo} ano ${moto.anoFabricacao}. Sim, ela é bem velha. rsrs`)





console.log("------------------------------------------")

// Os objetos são mutáveis
let namorada = {primeiroNome:"Camila", segundoNome:"Pitanga", idade:45, corOlhos:"castanhos"}

let x = namorada;
x.idade = 46;

console.log(x.idade)

// O objeto x não é uma cópia da pessoa. É uma pessoa. Tanto x quanto pessoa são o mesmo objeto.
// Qualquer alteração em x também mudará a pessoa, porque x e pessoa são o mesmo objeto.

console.log("------------------------------------------")

/*
    Propriedades são os valores associados a um objeto JavaScript. 
Um objeto JavaScript é uma coleção de propriedades não ordenadas.
Geralmente, as propriedades podem ser alteradas, adicionadas e excluídas, 
mas algumas são somente leitura.

Algumas formas de acessar a propriedade de um objeto. 

*/
// Sintaxe: nomeDoObjeto.propriedade
console.log(moto.marca)

// Sintaxe: nomeDoObjeto["propriedade"]

console.log(carro["anoFabricacao"])


console.log("------------------------------------------")

// Percorrendo um objeto
// const person3 = {fname:"John", lname:"Doe", age:25}; 
// var m;
// for (m in person3) {
//   txt += person3[m] + " ";
// }



// https://www.w3schools.com/js/js_object_definition.asp

