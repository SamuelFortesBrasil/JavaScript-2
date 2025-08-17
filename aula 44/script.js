const palco = document.getElementById('palco')
const nObjetos = document.getElementById('num_objetos')
const quantidade = document.getElementById('quantidade')
const adicionar = document.getElementById('adicionar')
const remover = document.getElementById('remover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0

class Bola{
    constructor(ABolas,palco){
        this.tamanho = Math.floor(Math.random()*10)+10
        this.r= Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.x = Math.floor(Math.random()* (larguraPalco -  this.tamanho))
        this.y = Math.floor(Math.random()* (alturaPalco - this.tamanho))
        this.velX = Math.floor(Math.random() * 3) + 0.5
        this.velY = Math.floor(Math.random() * 3) + 0.5
        this.dirX = (Math.random() * 10) > 5 ? 1: -1
        this.dirY = (Math.random() * 10) > 5 ? 1: -1
        this.palco = palco
        this.ABolas = ABolas
        this.id = Date.now()+ "_"+(Math.random()*100000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.eu = document.getElementById(this.id)
    }
    posicao(){

    }
    remover(){

    }
    desenhar(){

    }
    controlar(){

    }
}



window.addEventListener('resize',(e)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

adicionar.addEventListener('click',(e)=>{
    const quantidadeF = quantidade.value
    for(let i = 0 ; i < quantidadeF; i++){

    }
})

remover.addEventListener('click',(e)=>{
    bolas.map((el)=>{

    })
})