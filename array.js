// Um pouco sobre array
const valores = [7.8, 6.4, 5.3, 9.8, 8.6, 3.5, 7.2, 9.3, 6.0 ]
console.log(valores)

console.log(valores[1], valores[4])


// length - Traz a quantidade de elementos 
console.log(valores.length)

console.log("----------------------------------")
for ( let i = 0 ; i < valores.length; i++) {
    console.log(valores[i])
}


console.log("----------------------------------")
// push() -- Adciona um elemento sempre ao final do array

console.log(valores.length)
valores[9] = 8.6
console.log(valores)

valores.push(9.5)
console.log(valores)

console.log("----------------------------------")
// pop() - Retirar o ultimo valor do array
valores.pop()
console.log(valores)

console.log(valores.pop())
console.log(valores)

console.log("----------------------------------")
// Uma outra forma de deletar um elemento é o delete
delete valores[4]
console.log(valores)
console.log(typeof valores[4])

valores.push(7.7)
console.log(valores)

valores[4] = 7.1
console.log(valores)





console.log("----------------------------------")
const fabricantes = ["Audi", "BMW", "Chevrolet", "Ford", "Mercedes", "Tesla", "wolksvagem"]

console.log(fabricantes)

console.log("----------------------------------")
function imprimir(marcas, indice) {
    console.log(`${indice + 1}. ${marcas}`)
}
fabricantes.forEach(imprimir)

console.log("----------------------------------")
function imprimir2(valor, indice) {
    console.log(`${indice}. ${valor}`)
}
valores.forEach(imprimir2)


console.log(typeof valores)