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
        this.controle = setInterval(() => this.controlar(),10)
        this.eu = document.getElementById(this.id)
        numBolas++
        nObjetos.innerHTML = numBolas
    }

    posicao(){
        return this.ABolas.indexOf(this)
    }

    remover(){
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
            if(b.id != this.id){
                return b
            }
        })
        this.eu.remove()
        numBolas --
        nObjetos.innerHTML = numBolas
    }

    desenhar(){
        const div = document.createElement('div')
        div.setAttribute('id',this.id)
        div.setAttribute('class','bola')
        div.setAttribute('style',`left:${this.x}px;top:${this.y}px;width: ${this.tamanho}px;height: ${this.tamanho}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        palco.appendChild(div)
    }

    colisao(){
        if(this.x + this.tamanho >= larguraPalco){
            this.dirX = -1
        } else if(this.x <= 0 ){
            this.dirX = 1
        }
        if(this.y + this.tamanho >= alturaPalco){
            this.dirY = -1
        } else if(this.y <= 0){
            this.dirY = 1
        }
    }

    controlar(){
        this.colisao()
        this.x += this.dirX * this.velX
        this.y += this.dirY * this.velY
        this.eu.setAttribute('style',`left:${this.x}px;top:${this.y}px;width: ${this.tamanho}px;height: ${this.tamanho}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        if((this.x > larguraPalco)|| (this.y >alturaPalco)){
            this.remover()
        }
    }
}



window.addEventListener('resize',(e)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

adicionar.addEventListener('click',(e)=>{
    const quantidadeF = quantidade.value
    for(let i = 0 ; i < quantidadeF; i++){
        bolas.push(new Bola(bolas,palco))
    }
})

remover.addEventListener('click',(e)=>{
    bolas.map((b)=>{
        b.remover()
    })
})