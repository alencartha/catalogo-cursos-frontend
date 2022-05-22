const h1 = document.querySelector('#titulo')
const btnConfirma = document.querySelector('#btnConfirma')

h1.innerText = 'Outro título'

btnConfirma.addEventListener('click', (e) =>{
    e.preventDefault()
    alert('clicou')
})