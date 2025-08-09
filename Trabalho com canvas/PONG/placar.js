class Placar{
    constructor(ctx,pontoJogador,pontoInimigo){
        this.ctx = ctx
        this.pontoJogador = pontoJogador
        this.pontoInimigo = pontoInimigo
        this.esquerda = 0
        this.margem = 10
        this.direita = this.ctx.canvas.width
        this.largura = 100
    }

    desenhar(){
        this.ctx.font = '70px monospace'
        this.ctx.fillSyle = 'white'
        this.ctx.fillText(pontoJogador,90,this.margem +70,this.largura)
        this.ctx.fillText(pontoInimigo,this.direita - this.largura -this.margem,this.margem +70,this.largura)
    }
}