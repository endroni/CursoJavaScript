// Object.values()
// Transformando um Objeto em Array

// let carros = {marca: "Ford", modelo: "F1000"};

// let carrosArray = Object.values(carros);
// console.log(carrosArray)

// console.log("--------------------------------------------")




// stringify()
// Passando um Objeto para String (JSON)

// let carrosString = JSON.stringify(carros);
// console.log(carrosString);

// O resultado foi uma string seguindo a notação JSON:

// console.log("--------------------------------------------")








// Construtor

// function Familia(nome, sobrenome, idade, sexo) {
//     this.primeiroNome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.sexo = sexo;
// }

// let pai = new Familia("José", "Cândido", 65, 'M')
// let mae = new Familia("Luiza", "Santos", 62, 'F')

// console.log(pai)

// Boa prática nomear funções de construtor com uma primeira letra maiúscula.

// Não é possível adicionar uma nova propriedade a um construtor de objeto existente 


// Familia.natural = "Belo Horizonte";
// console.log(pai)


// Uma camada de segurança que o Artur comentou ontem

// Para adicionar uma nova propriedade a um construtor, 
// deve-s adicioná-la à função do construtor






//##########             FIM                  #########################








// function Familia(nome, sobrenome, idade, sexo) {
//     this.primeiroNome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.sexo = sexo;
//     this.ondeVive = "Belo Horizonte"
// }

// console.log(pai)

// console.log("--------------------------------------------")







// prototype
// Podemos precisar adicionar uma propriedade em todos os objtetos
// A prototypepropriedade JavaScript permite adicionar novas 
// propriedades aos construtores de objetos

// Porem eles não aparecem se não invocados

// Familia.prototype.origem = "Brasil"

// console.log(mae.origem)

// // Alterar um valor de um prototype
// Object.defineProperty(Familia, "origem", {value:"África"})
// console.log(Familia.origem)



