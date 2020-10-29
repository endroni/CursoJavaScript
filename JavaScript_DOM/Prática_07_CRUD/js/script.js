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
    render();

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
        render();
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



function render() {
    var divNames = document.querySelector('#names');
    divNames.innerHTML = ''; // Para não replicar a lista

    // Criar ul
    var ul = document.createElement('ul');

    for (var i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];
        // Criar li em cada iteração
        var li = document.createElement('li');
        // li.textContent = currentName;
        

        // Criação do botão de excluir
        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'X';

        // Criação de span para receber o nome
        var span = document.createElement('span');
        span.textContent = currentName;

        // Anexando o botão e o span ao li
        li.appendChild(button);
        li.appendChild(span);

        ul.appendChild(li);
    }
    

    divNames.appendChild(ul);
    clearInput();
}

function clearInput() {
    // TODO: Não funcionou, limpar após inserir
    // inputName.value = '';
    // inputName.focus();
}