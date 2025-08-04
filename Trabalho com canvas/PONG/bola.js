class Bola{
    constructor(ctx){
        this.ctx = ctx
        this.movendo = false
        this.direcaoX = 0
        this.direcaoY = 0
        this.altura = 20
        this.largura = 20
        this.x = (ctx.canvas.width / 2) - (this.altura/ 2)
        this.y = (ctx.canvas.height / 2) - (this.altura/ 2)
        this.velocidade = 5
        this.i = 0

        
    }

    iniciar(){
        this.movendo = true
        this.direcaoX = -1
        this.direcaoY = (Math.random() * 10 > 5 ? -1: 1)
    }

    pause(){
        this.movendo = false
    }

    atualizar(){
            if(this.movendo){
                this.x += this.direcaoX * this.velocidade
                this.y += this.direcaoY * this.velocidade
                if(this.x >= (this.ctx.canvas.width - this.largura)){
                    this.direcaoX = -1
                }
                if(this.x <= 0){
                    this.direcaoX = 1
                }
                if(this.y >=(this.ctx.canvas.height - this.altura)){
                    this.direcaoY = -1
                }
                if(this.y <= 0){
                    this.direcaoY = 1
                }
            }
    }

    desenhar(){
        this.atualizar()
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }

}