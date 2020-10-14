// A arrow Function permite escrever uma sintaxe de uma função mais curta

// Função normal
function falar() {
    console.log("Olá");
}
falar()

segunda = function() {
    return "Segunda-feira"
}
console.log(segunda())

// Uma função arrow
terca = () => {
    return "Terça-feira"
} 
console.log(terca())

// Pode retirar as chaves e o return se tiver apenas uma instrução
// Caso não tenha parâmetro os parenteses são necessários

quarta = () => "Quarta-feira"

console.log(quarta())

// Se tiver parâmetros...
quinta = dia => "Amanhã é " + dia;

console.log(quinta("quinta-feria"))

dobro = a => 2 * a;  // return implícito

console.log(dobro(8))

// ES6 - Arrow function - Não necessita das palavras reservadas (function) nem (return)
// Objetivos:
// Tamanho reduzido
// This associado ao contexto - Falaremos depois sobre o this

let divide = ( c , d) => c / d;
console.log(divide(4 , 2));



// As funções arrow são sempre anônimas
// Obs. As funções em seta precisam ser definidas antes de serem usadas. Não são adequadas 
// para definir métodos de objeto pois não possui sua própria this(+- = public).
// Falaremos do this depois que tratarmos objetos.