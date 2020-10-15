// Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica. 
// Uma função JavaScript é executada quando "algo" a invoca (chama).

// Ferramentas:
// Node
// Um editor de texto
// Caso esteja no VSCode, uma extensão para execução ajuda. O Code Runner é uma opção
// Pressione Ctrl + Alt + N para executar o comando de teste abaixo

// Sintaxe
// function nomeDaFuncao ( parâmetros ) {
//     bloco de código
//     return saída
// }

// Chamar
//    nomeDaFuncao( argumento1, argumento2, ...)

// Exemplo 1 : Uma função que soma dois argumentos

function soma( valor1, valor2 ) {
    resultado = valor1 + valor2
    return resultado
}

console.log( soma( 2 , 3 ) ); // o console.log, serve apenas para mostrar o resultado

// Exemplo 2: uma função que multiplica dois argumentos

function multiplicar (valor1, valor2){
    resultado = valor1 * valor2
    return resultado
}

console.log (multiplicar (2, 3));

// Exemplo 3: uma função que divide dois argumentos
function dividir (valor1, valor2){
    resultado = valor1 / valor2
    return resultado
}

console.log (dividir (6, 2));

// Exemplo 4: uma função para subtrair dois argumentos
console.log (sub (8,2));

function sub (v1, v2){
    return v1 - v2;
}

// Os parâmetros da função, são listados entre parênteses() na definição da função.
// Os argumentos da função, são os valores recebidos pela função quando invocada.
// Dentro da função, os argumentos (os parâmetros) se comportam como variáveis locais.

// Expressão de função
// Uma função JavaScript também pode ser definida usando uma expressão.
// Uma expressão de função pode ser armazenada em uma variável:

// Exemplo 5 : Uma função armazenada dentro de uma variável 

const x = function ( a, b) { return a * b;} 
console.log(x)

// Depois que uma expressão de função é armazenada em uma variável, 
// a variável pode ser usada como uma função:

console.log( x( 5, 5)   )

// Essa é a famosa " função anônima " 

// Exemplo 6: Transformando a temperatura fahrenheit em celsius
function paraCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
console.log(paraCelsius(90))

const paraFahrenheit = function (celsius) {
    return (celsius * 9/5) + 32;
}
console.log(`26C° em fahrenheit são ${paraFahrenheit(26)}`)


// Parâmetro padrão
// Argumentos ignorados são definidos como undefined (indefinidos)

function queNumero( v1, v2 ) {
    if (v2 === undefined ) {
        v2 = 2;
    }
    return v1 + v2;
}

console.log(queNumero(2));

// A partir no ECMAScript 2015 
function queNumero2( v1, v2 = 3 ) {
    return v1 + v2;
}
console.log(queNumero2(2, 2));

// Arrow Function
// A arrow Function permite escrever uma sintaxe de uma função mais curta

// Uma função normal
function falar() {
    console.log("Olá!")
}
falar();

const segunda = function () {
    return "Segunda-feira!"
}
console.log(segunda())

// Uma função arrow
terca = () => {
    return "Terça-feira!"
}
console.log(terca())

// Pode retirar as chaves e o return se tiver apenas uma instrução

quarta = () => "Quarta-feira"

console.log(quarta())

// Caso não tenha parâmetro os parenteses são necessários

// Se tiver parâmetros...
quinta = dia => "Amanhã é " + dia;

console.log(quinta("quinta-feira"))

// Com valor
dobro = a => 2 * a; 

console.log(dobro(2))

// ES6 - Arrow function - Não necessita das palavras reservadas (function) nem (return)
// Objetivos: 
// Tamanho reduzido
// This associado ao contexto - Falaremos depois sobre o this

divide = (c, d) => c / d;
console.log(divide(4,2));

// As funções arrow são sempre anônimas
// Obs. As funções em seta precisam ser definidas antes de serem usadas. Não são adequadas 
// Falaremos do this depois que tratarmos objetos.

console.log("-----------------------------------------------------------------")


// Um pouco sobre array 
const valores = [7.8, 6.4, 5.3, 9.8, 8.6, 3.5, 7.2, 9.3, 6.0 ]
console.log(valores[0], valores[3])

// length - tras a quantidade de elementos
console.log(valores.length)

// push() - adiciona um elemento no final 
valores.push(2.9)
console.log(valores)

// pop() - retira o ultimo valor do array
console.log(valores.pop())
console.log(valores)

// deletando elemento
delete valores[0]
console.log(valores)

console.log(typeof valores)


// Percorrendo array

const fabricantes = ["Audi", , "BMW", "Chevrolet", "Ford", "Mercedes", "wolksvagem"]

function imprimir(nome) {
    console.log(`${nome}`)
}
fabricantes.forEach(imprimir)

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

console.log("-----------------------------------------------------------------")

const notas = [7.8, 6.4, 5.3, 9.8, 8.6, 3.5, 7.2, 9.3, 6.0 ]

// Sem Calback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback 
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// ou 
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)