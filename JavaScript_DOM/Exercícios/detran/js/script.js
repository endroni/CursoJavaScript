const velocidadeVia = document.querySelector('#velocidadeVia')
const btnVia = document.querySelector('#btnVia')

const velocidadeTraf = document.querySelector('#velocidadeTraf')
const btnTraf = document.querySelector('#btnTraf')

const res = document.querySelector('#res')

btnVia.addEventListener('click', Verificar)

function Verificar () {
    res.textContent = velocidadeVia.value
}

