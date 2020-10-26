window.addEventListener('load', start); // Carrega a página antes de executar qualquer aplicação

//Escopo global - Captura os elementos
const inputSalario = document.querySelector('#inputSalario');
const divResultado = document.querySelector('#divResultado');

function start() {
  preventFormSubmit();
  calcSalarioLiquido();
}
   
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();//previne o comportamento default do objeto, ou seja cancela o comportamento que os elementos geralmente tem na página,
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function calcSalarioLiquido() {

  function handleChange(event) {

    salarioLiquido = inputSalario.value;
    divResultado.innerHTML = "";

    const span = document.createElement('span');

    if (inputSalario.value <= 1830.29) {
      salarioLiquido -= (salarioLiquido * 8 / 100);
    }
    else {
      if (inputSalario.value <= 3050.52) {
        salarioLiquido -= (salarioLiquido * 9 / 100);
      }
      else {
        salarioLiquido -= (salarioLiquido * 11 / 100);
      }
    }
    span.textContent = `Seu salário Liquido é de R$  ${salarioLiquido.toFixed(2)}`;

    divResultado.appendChild(span);

  }

  function startValues() {
    inputSalario.addEventListener('change', handleChange);
  }

  startValues();
}