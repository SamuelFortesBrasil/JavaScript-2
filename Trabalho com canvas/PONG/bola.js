class Bola{
    constructor(ctx,jogador){
        this.ctx = ctx
        this.jogador = jogador
        this.movendo = false
        this.direcaoX = -1
        this.direcaoY = 0
        this.altura = 20
        this.largura = 20
        this.x = (ctx.canvas.width / 2) - (this.altura/ 2)
        this.y = (ctx.canvas.height / 2) - (this.altura/ 2)
        this.velocidade = 3.9
        this.i = 0

        
    }

    iniciar(){
        this.movendo = true
       // this.direcaoY = 0
        //this.direcaoX = -1
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
                    pontoJogador ++
                    this.resetBola()
                    this.direcaoY = -1
                }
                if(this.x <= 0){
                    this.direcaoX = 1
                    pontoInimigo ++
                    this.resetBola()
                    this.direcaoY = 1
                }
                if(this.y >=(this.ctx.canvas.height - this.altura)){
                    this.direcaoY *= -1
                }
                if(this.y <= 0){
                    this.direcaoY *= -1
                }
                if((this.x <= this.jogador.x + this.jogador.largura && this.x + this.largura >= this.jogador.x) && (this.y+this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura)){
                        this.direcaoX *= -1
                       //this.direcaoY = ((this.y +(this.altura/2))-(this.jogador.y +(this.jogador.altura/2)))/20
                }
            }
    }
    resetBola(){
        this.movendo =false
        this.x = (ctx.canvas.width / 2) - (this.altura/ 2)
        this.y = (ctx.canvas.height / 2) - (this.altura/ 2)
        jogador.x = 100
        jogador.y = (ctx.canvas.height / 2) - (jogador.altura/ 2)
        inimigo.x =  650
        inimigo.y = (ctx.canvas.height / 2) - (this.altura/ 2)
    }

    desenhar(){
        this.atualizar()
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }

}