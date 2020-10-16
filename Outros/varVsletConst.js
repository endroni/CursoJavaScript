// Primeira parte com var

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i = ', i)

// ------------------------------------------------------------







// Segunda parte com let

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log('i = ', i)

// Dá erro por causa do contexto de escopo.
// Não me deixa trabalhar com uma variável que foi declarada dentro de uma estrutura 
// do lado de fora da mesma

// ------------------------------------------------------------



// let nome = "Olegário Marciel" 
// nome = "Afonso Pena"
// console.log(nome)

// Agora mudando para const



// Fim



// Terceira  parte com var

// const funcs = []

// for (var i = 0; i < 10; i++ ) {
//     funcs.push(function() {
//         console.log(i)
//     })
// }

// funcs[2]()
// funcs[8]()

// // Todos os elementos do array tem o mesmo valor. 

// ------------------------------------------------------------







// Quarta  parte com let

// const funcs = []

// for (let i = 0; i < 10; i++ ) {
//     funcs.push(function() {
//         console.log(i)
//     })
// }

// funcs[2]()
// funcs[8]()

// É como se o let tivesse uma memória
// A função tem consiência de onde ela esteja 

// closers

// ------------------------------------------------------------







// Hoisting - Içamento 

// console.log('a = ', a)
// var a = 2
// console.log('a = ', a)

// Nesse exemplo. O Js joga a declaração da variável a para antes do console.log da linha 56. 
// É como se fizesse isso:

// var a
// console.log('a = ', a)
// a = 2
// console.log('a = ', a)

// ------------------------------------------------------------

// Agora com let


// console.log('a = ', a)
// let a = 2
// console.log('a = ', a)

// O Hoisting não ocorre. 

// O que precisamos fazer é declarar as variáveis no início do código  