let lista = document.getElementById('mLista')
const enviar = document.getElementById('enviar')
const marcar = document.getElementById('marcar')
let digitos = document.getElementById('it')

enviar.addEventListener('click', () =>{
     if(digitos.value.length === 0){
          alert('Não é possível adicionar um item vazio')
     } else {
    const nLI = document.createElement('li')
    nLI.textContent = digitos.value
    lista.appendChild(nLI)
    digitos.value =''
    }
})
 // Não é possível adicionar uma classe a um texto de input, então a funcionalidade de importante não vai ocorrer.