// Operador ternário: 

const valor1 = 40;
const valor2 = 50;

if (valor1 > valor2) {
    console.log("Maior!")
} else if (valor1 < valor2) {
    console.log("Menor!")
} else {
    console.log("Iguais");
}

const comparação = valor1 > valor2 ? "Maior" : valor1 < valor2 ? "Menor" : "Iguais"
console.log(comparação)
