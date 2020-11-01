window.addEventListener('load', start); // Carrega a página antes de executar qualquer aplicação

//Escopo global - Captura os elementos
const inputVelocidadePermitida = document.querySelector('#inputVelocidadePermitida');
const inputVelocidadeTrafegada = document.querySelector('#inputVelocidadeTrafegada');
const divResultado = document.querySelector('#divResultado');

function start() {
  previneEnvio();
  calcDiferencaVelocidade();
}
   
function previneEnvio() {
  function trataEnvioFormulario(event) {
    event.preventDefault();//previne o comportamento default do objeto, ou seja cancela o comportamento que os elementos geralmente tem na página,
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', trataEnvioFormulario);
}

function calcDiferencaVelocidade() {

  function trataMudanca(event) {

    velocidadePermitida = inputVelocidadePermitida.value;
    velocidadeTrafegada = inputVelocidadeTrafegada.value;  
    
    if (velocidadePermitida > velocidadeTrafegada) {
      diferencaVelocidade = Number(0);
    } else if (velocidadeTrafegada > velocidadePermitida) {
      if (velocidadeTrafegada > velocidadePermitida) {
      diferencaVelocidade = inputVelocidadeTrafegada.value -inputVelocidadePermitida.value;
        if( diferencaVelocidade <= 7 ){
          
        }
      } 
    }
    
    divResultado.innerHTML = "";

    const span = document.createElement('span');

    span.textContent = `${diferencaVelocidade} Km/h acima do permitido`;

    divResultado.appendChild(span);

  }

  function startValues() {
    inputVelocidadePermitida.addEventListener('change', trataMudanca);
    inputVelocidadeTrafegada.addEventListener('change', trataMudanca); 
  }

  startValues();
}