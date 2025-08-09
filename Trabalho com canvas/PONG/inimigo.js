class Inimigo{
    constructor(ctx,bola){
        this.ctx = ctx
        this.bola = bola
        this.altura = 100
        this.largura = 20
        this.x =  650
        this.y = (ctx.canvas.height / 2) - (this.altura/ 2)
        this.velocidade = 3.5
        this.origemX = this.x
        this.origemY = this.y
        
    }

    atualizar(){
        if(this.bola.direcaoX >= 0 && this.bola.x >= this.ctx.canvas.width / 2 ){
            //Rebate a bola
            if(this.bola.y + (this.bola.altura /2) > this.y+(this.altura/2)){   //Move para baixo
                this.y += this.velocidade
            }
            if(this.bola.y + (this.bola.altura /2) < this.y+(this.altura/2)){  //Move para cima
                this.y -= this.velocidade
            }
            if(this.bola.x + this.bola.largura < this.x){
                this.x -= this.velocidade
            }
        } else{
            //Volta para posição de origem
            if(this.y > this.origemY){
                this.y -= this.velocidade
            }
            if(this.y < this.origemY){
                this.y += this.velocidade
            }
            if(this.x > this.origemX){
                this.x -= this.velocidade
            }
            if(this.x < this.origemX){
                this.x += this.velocidade
            }
        }
        //colisão
        if((this.x <= this.bola.x + this.bola.largura && this.x + this.largura >= this.bola.x) && (this.y+this.altura >= this.bola.y && this.y <= this.bola.y + this.bola.altura)){
           this.bola.direcaoX *= -1
           //this.direcaoY = ((this.y +(this.altura/2))(this.jogador.y +(this.jogador.altura/2)))/3
          }
    }

    desenhar(){
        this.atualizar()
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }

}