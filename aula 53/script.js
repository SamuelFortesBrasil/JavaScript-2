const esquerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')
const carro = document.getElementById('carro')

const inicio = () =>{
    carro.style.position = "relative"
    carro.style.left = '0px'
}

esquerda.addEventListener('click',(e)=>{
    let pos = parseInt(carro.style.left)
    pos -= 10
    carro.style.left = `${pos}px`
})

direita.addEventListener('click',()=>{
    let pos = parseInt(carro.style.left)
    pos += 10
    carro.style.left = `${pos}px`
})

window.addEventListener('onload', inicio())