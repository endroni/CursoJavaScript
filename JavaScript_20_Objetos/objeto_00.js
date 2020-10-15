// Em JavaScript, com exceção dos valores primitivos. Quase "tudo" é um objeto.

// Valores primitivos
// Um valor primitivo é um valor que não possui propriedades ou métodos.
// JavaScript define 5 tipos de tipos de dados primitivos:
// string
// number
// boolean
// null
// undefined

// Exemplo 

const prod1 = {}
prod1.nome = "Notebook"
prod1.preco = "5.700"

console.log(prod1)

/* Objeto em JavaScript não é a mesma coisa que JSON 
 Exemplo de JSON

{
    "nome":"Notebook",
    "preco":7.899
 }

 */

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
  nome              Dom Casmurro
  autor              Machado de Assis
  idioma             Português
  dataPublicacao    1899
*/

const disciplina = {
    nome: 'Programação Client-Side',
    cargaHoraria: 230,
    turno: "Manhã"
};
console.log(disciplina)

/* 
    Métodos de Objetos

Métodos são ações que podem ser executadas em objetos.
As propriedades do objeto podem ser valores primitivos, outros objetos ou funções.
Um método de objeto é uma propriedade de objeto que contém uma definição de função .

Exemplo: 
*/
const aluno = {
    nome: "Charles",
    sobrenome: "Xavier",
    idade: 48,
    nomeCompleto: function() {return this.nome + " " + this.sobrenome;}
}
console.log(aluno.nomeCompleto())

// Objeto contendo outros objetos

const contato = {
    logradouro: "Rua Lauro Gomes Vidal",
    numero: 560,
    cep: 319000000,
    telefone : { 
        celular: 9876554544,
        fixo: 3445556677,
        recado: 645489897
    }
}
console.log(contato)
console.log(typeof contato.telefone)

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

//    Usando a palavra-chave new
// O método abaixo não é recomendado pois perde em 
// simplicidade, legibilidade e velocidade de execução

let moto = new Object();
moto.marca = "Honda";
moto.modelo = "Kavasaki";
moto.anoFabricacao = 1981;
moto.cilindradas = 125;

console.log(moto)

// Alterando valor de uma propriedade de um objeto
moto.modelo = "Turuna";

console.log(`Eu tenho uma ${moto.modelo} ano ${moto.anoFabricacao}. Sim, ela é bem velha. rsrs`)

/*
    Propriedades são os valores associados a um objeto JavaScript. 
Um objeto JavaScript é uma coleção de propriedades não ordenadas.
Geralmente, as propriedades podem ser alteradas, adicionadas e excluídas.

Algumas formas de acessar a propriedade de um objeto. 

*/

// Sintaxe: nomeDoObjeto.propriedade
console.log(moto.marca)

// Sintaxe: nomeDoObjeto["propriedade"]

console.log(carro["anoFabricacao"])


// Excluindo uma propriedade
delete carro.anoFabricacao

console.log(carro)
