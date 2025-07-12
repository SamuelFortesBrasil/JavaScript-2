class Carro{
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Esportivo extends Carro{
    constructor(nome,portas,drift,peso,dirigibilidade){
        super(nome,portas)
        this.drift = drift
        this.peso = peso
        this.dirigibilidade = dirigibilidade
    }
}

const CarroNormal = new Carro('Celta',4)
CarroNormal.setCor('Vermelho')
CarroNormal.ligar()

console.log(`Nome: ${CarroNormal.nome}`)
console.log(`Cor: ${CarroNormal.cor}`)
console.log(`Portas: ${CarroNormal.portas}`)
console.log(`Ligado: ${(CarroNormal.ligar?'SIM':'NÃO')}`)
console.log(`Velocidade: ${CarroNormal.vel}`)
console.log('------------------------------')

const Kart = new Esportivo('Blooper Kart',0,'bom','Leve','Ideal')
Kart.setCor('Branco')
Kart.ligar()
Kart.vel = 150

console.log(`Nome: ${Kart.nome}`)
console.log(`Cor: ${Kart.cor}`)
console.log(`Portas: ${Kart.portas}`)
console.log(`Ligado: ${(Kart.ligar?'SIM':'NÃO')}`)
console.log(`Velocidade: ${Kart.vel}`)
console.log(`Peso: ${Kart.peso}`)
console.log(`Dirigibilidade: ${Kart.dirigibilidade}`)
console.log(`Drift: ${Kart.drift}`)
console.log('------------------------------')
