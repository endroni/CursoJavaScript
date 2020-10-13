// Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica. 
// Uma função JavaScript é executada quando "algo" a invoca (chama).

// Ferramentas:
// Node
// Um editor de texto
// Caso esteja no VSCode, uma extensão para execução ajuda. O Code Runner é uma opção
// Pressione Ctrl + Alt + N para executar o comando de teste abaixo

// Sintaxe:
// function functionName(parameters) {
//     // code to be executed
//   }

function soma(v1, v2) {
    return v1 + v2;
} 
console.log(soma(2, 4));

// Os parâmetros da função, são listados entre parênteses() na definição da função.
// Os argumentos da função, são os valores recebidos pela função quando invocada.
// Dentro da função, os argumentos (os parâmetros) se comportam como variáveis locais.

// Expressão de função
// Uma função JavaScript também pode ser definida usando uma expressão .
// Uma expressão de função pode ser armazenada em uma variável:
// Exemplo: 

const x = function (a, b) {return a * b};
console.log(x);

// Depois que uma expressão de função é armazenada em uma variável, 
// a variável pode ser usada como uma função:

console.log(x(2,2));

// Essa é a famosa " função anônima " 
// Precisa de ponto-e-vírgula; porque é parte de uma instrução executável.

function paraCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
console.log(paraCelsius(90));

const far = function paraFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(`26 C° em fahrenheit são: ${far(26)} `);
 

// ES6 - Funções de Seta - Não necessita das palavras reservadas function nem return
let divide = ( c , d) => c / d;
console.log(divide(4 , 2));

// Obs. As funções em seta precisam ser definidas antes de serem usadas. Não são adequadas 
// para definir métodos de objeto pois não possui sua própria this(+- = public).

// Operador ternário
e = 7;
f = 9;
const comparação = ( e > f) ? "Maior" : e < f ? "Menor" : "iguais";
console.log(comparação)

function comparaNumeros(e,f) {
    return e > f ? 1 : e < f ? -1 : 0 
}
console.log(`chamada da função comparação: ` + comparaNumeros(4,3))

// Parâmetro padrão
// Argumentos ignorados são definidos como undefined (indefinidos)

function queNumero(v1, v2) {
    if (v2 === undefined) {
        v2 = 2;
    };
    return v1 + v2;
}
console.log(queNumero(2));

// A partir no ECMAScript 2015 
function queNumero2(v1, v2 = 3) {
    return v1 + v2;
}
console.log(queNumero2(3));

// O objeto Argumentos
// Encontrando o maior número

numeros = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(numeros))