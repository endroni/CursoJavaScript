window.addEventListener('load', start); // Carrega a página antes de executar qualquer aplicação

//Escopo global - Captura os elementos
const velocidadeVia = document.querySelector('#velocidadeVia')
const velocidadeTraf = document.querySelector('#velocidadeTraf')

const verificar = document.querySelector('#verificar')

const res = document.querySelector('#res')

function start() {
    previneEnvio();
}

verificar.addEventListener('click', Verificar)

function Verificar() {  

    const velMaxima = velocidadeVia.value
    const odometro = velocidadeTraf.value
    const diferenca = odometro - velMaxima
    const porcentagem = diferenca / 100 * velMaxima

    if ( odometro > velMaxima ) {
        if ( diferenca <= 7 ) {
            res.textContent = `Advertência! 
            Velocidade máxima da via ${velMaxima} Km/h.
            Velocidade trafegada ${odometro} Km/h. `
        }   
        else if (porcentagem <= 20 ) {
            res.textContent = 
            `Autuado. Infração Grave. 
            Velocidade máxima da via ${velMaxima} Km/h.
            Velocidade trafegada ${odometro} Km/h. 
            ${porcentagem} % acima da velocidade máxima`
        }
    }
    else {
        res.textContent = 
        `Velocidade máxima da via ${velMaxima} Km/h.
        Velocidade trafegada ${odometro} Km/h. 
        Siga com cuidado`
    }
    

    function calculaAutuacao(event) {
        res.textContent = `teste`
    }
    
      function startValues() {
        inputSalario.addEventListener('change', calculaAutuacao);
      }    
      startValues();
}
