function mudaCorDeFundo() {
    document.body.style.backgroundColor = `black`; // podemos utilizar a craze `
}


var botao = document.getElementById("bmudacor");
botao.onclick = preto;

function preto() {  
    document.body.style.backgroundColor = "white";
}


/* se assim não funcionar, tente com uma função
function configura() {
    var botao = document.getElementById("bmudacor");
    botao.onclick = preto;
}
*/


