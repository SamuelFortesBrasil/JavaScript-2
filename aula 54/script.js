const esquerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')
const carro = document.getElementById('carro')
const parar = document.getElementById('parar')

const inicio = ()=>{
    carro.style.left = '0px'
    carro.style.position = 'relative'
}

let anima = null

const mover = (d) =>{
     carro.style.left = parseInt(carro.style.left) + (10*d) +'px'
}


parar.addEventListener('click',()=>{
    clearInterval(anima)
})

esquerda.addEventListener('click',(e)=>{
    clearInterval(anima)
    anima = setInterval(mover,20,-1)
})

direita.addEventListener('click',()=>{
    clearInterval(anima)
    anima = setInterval(mover,20,1)
})

window.onload = inicio