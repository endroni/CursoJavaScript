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
// Uma função JavaScript também pode ser definida usando uma expressão.
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




// Funções anônimas
// Uma função anônima é uma função que não tem nome
const soma2 = function(x, y) {
    return x + y;
}

console.log(soma2(5, 6));









const imprimirResultado = function (a, b, operacao = soma2) {
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3, 6, soma2)
imprimirResultado(3,7, function (x, y) { return x - y})
imprimirResultado(3, 4, (x, y) => x * y)



















// O objeto Argumentos arguments.length
// Encontrando o maior número

numeros = encontreMaior(1, 123, 500, 115, 44, 88);

function encontreMaior() {
  let i;
  let max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(encontreMaior(numeros))

// um teste que fiz para entender o Infinity
if (Infinity > 0) {
    console.log(typeof(Infinity));
    console.log("maior")
}

// Utilizando o arguments.length
// Somando argumentos

somaNumeros = sumAll(1, 123, 500, 115, 44, 88)

function sumAll() {
    var i;
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

console.log(sumAll(somaNumeros))

// this no escopo global
// let janela = jn();

// function jn() {
//     return this;
// }
// console.log(janela);

// this no escopo local
let aluno = {
    nome: "João",
    sobrenome: "Pequeno",
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome;
    }
}
console.log(aluno.nomeCompleto())

// O construtor new (palavra-chave) cria um objeto
function funcionario(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

let oNomeDele = new funcionario("João", "De Deus");
console.log(oNomeDele.sobrenome);
