// Quando a página carregar, executa a função start
window.addEventListener('load', start);

function start() {
    console.log('Teste carregamento');
    console.log('Página totalmente carregado');

    // Captura o valor do input via id
    var nameInput = document.querySelector('#nameInput')

    // Adiciona o evento keyup ao nameInput para chamar
    // a função countName implementada na linha 22
    nameInput.addEventListener('keyup', countName)

    //Captura do form e add evento de submit chamando
    // função preventSubmit implementada na linha 32
    var form = document.querySelector('form');
    form.addEventListener('submit', preventSubmit);
} 

// O proprio evento (keyUp) é recebido aqui
function countName(event) {
    // O value possui todas as letras digitadas
    var count = event.target.value

    // Captura e substitui o valor do span no html
    var span = document.querySelector('#nameLength')
    span.textContent = count.length + ' caracteres'    
}

// Evita o envio antecipado do form ao clicar em cadastrar
function preventSubmit(event) {
    event.preventDefault();
    alert(nameInput.value + ' cadastrado com sucesso!')
}
