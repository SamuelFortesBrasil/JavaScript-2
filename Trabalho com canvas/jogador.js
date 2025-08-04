class Jogador{
    constructor(contexto,teclado){
        this.ctx = contexto
        this.teclas = teclado
        this.x = 0
        this.y = 0
        this.velocidade = 2
        this.cogumelo = new Image()
        this.cogumelo.src = "cogumelo.png"
        this.cogumelo.addEventListener('load',()=>{
           this.desenhar()

        })
    }

    atualizar(){
        if(this.teclas.esquerda){
            this.x -= this.velocidade
        } else if(this.teclas.direita){
            this.x += this.velocidade
        }
        if(this.x >= 483){
            this.velocidade = 0
            if(this.teclas.esquerda){
                this.velocidade = 2
            }
        }
       if(this.x <= 1){
            this.velocidade = 0
            if(this.teclas.direita){
                this.velocidade = 2
            }
        }
    }

    desenhar(){
        this.atualizar()
        this.ctx.drawImage(this.cogumelo,this.x,this.y)
    }

}