class Carro{
    constructor(tipo,estagioTurbo){
        this.turbo = new Turbo (estagioTurbo)
        if(tipo == 1){
            this.velMax = 120
            this.nome = 'normal'
        }else if(tipo == 2){
            this.velMax = 160
            this.nome = 'esportivo'
        } else if(tipo == 3){
            this.velMax = 200
            this.nome = 'kart'
        }
      //  this.velMax = this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log('------------')
    }
}

class Turbo{
    constructor(e){
        if(e == 0){
            this.pot = 0
        } else if(e == 1){
            this.pot = 50
        } else  if(e == 2){
            this.pot = 75
        } else if (e == 3){
            this.pot = 100
        }
    }
}

const c1 = new Carro(3,3)
const c2 = new Carro(1,1)

c1.info()
c2.info()