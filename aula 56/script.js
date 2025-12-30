const esquerda = document.getElementById('esquerda')
const direita = document.getElementById('direita')
const carro = document.getElementById('carro')
const parar = document.getElementById('parar')

const inicio = ()=>{
    carro.style.left = '0px'
    carro.style.width = '100px'
    carro.style.position = 'relative'
    Max = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let Max = null

const mover = (d) =>{
        if(d >0){
            if(parseInt(carro.style.left) <= Max){
                carro.style.left = parseInt(carro.style.left) + (10*d) +'px'    
            }else{
                clearInterval(anima)
            }
        }
        if(d < 0){
            if(parseInt(carro.style.left) >= 0){
                carro.style.left = parseInt(carro.style.left) + (10*d) +'px'    
            }else{
                clearInterval(anima)
            }
        }
        console.log(Max)
     
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
window.addEventListener('resize',()=>{
    Max = window.innerWidth - parseInt(carro.style.width)
})