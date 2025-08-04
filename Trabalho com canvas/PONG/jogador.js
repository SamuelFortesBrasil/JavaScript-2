class Jogador{
    constructor(ctx,teclado){
        this.ctx = ctx
        this.teclas = teclado
        this.altura = 100
        this.largura = 10
        this.x = 100
        this.y = (ctx.canvas.height / 2) - (this.altura/ 2)
        this.velocidade = 2

        
    }

    atualizar(){
        if(this.teclas.esquerda){
            if(this.x > 0){
                this.x -= this.velocidade
            }
        }
        if(this.teclas.direita){
            if(this.x < (this.ctx.canvas.width)/ 2 - this.largura){
                this.x += this.velocidade
            }
        }
        if(this.teclas.cima){
            if(this.y > 0){
                this.y -= this.velocidade
            }
        }
        if(this.teclas.baixo){
            if(this.y < this.ctx.canvas.height - this.altura){
                this.y += this.velocidade
            }
        }
    }

    desenhar(){
        this.atualizar()
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }

}