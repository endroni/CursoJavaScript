// Quando a página carregar, executa a função start
// garantindo que a página já esteja carregada
window.addEventListener('load', start);

// Simulação da camada de Dados
var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];

// Criação da variável global para ter acesso ao nome em
// todas as funções
var inputName = null;

function start() {
    // Impede recarregamento
    preventFormSubmit();

    // Captura o valor do input via id
    inputName = document.querySelector('#inputName')

    // Ativa o input assim que carrega a página
    activateInput();
} 

// Evita o envio antecipado do form ao enviar (enter)
function preventFormSubmit() {
    // Como essa função só vai ser executada aqui,
    // vale trazer para dentro
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

// Ativa o input assim que carrega a página
function activateInput() {
    inputName.focus();

    // Insere o novo nome
    function insertName(newName) {
        globalNames.push(newName);
        console.log(globalNames);
    }

    // Tem o objetivo de tratar a digitação
    function handleTyping(event) {
        if (event.key === 'Enter') {
            // Adiciona novo nome ao vetor global
            insertName(event.target.value);
        }
    }

    // Adiciona o evento keyup que chama a função handleTyping
    inputName.addEventListener('keyup', handleTyping);
}

