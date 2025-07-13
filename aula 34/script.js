const tipo_normal = document.getElementById('tipoNormal')
const tipo_kart = document.getElementById('tipoKart')
const f_velocidade = document.getElementById('fVel')
const f_peso = document.getElementById('fPeso')
const carros = document.getElementById('carros')
const adicionar = document.getElementById('bt_addCarro')
const f_nome = document.getElementById('fNome')
const f_portas = document.getElementById('fPortas')

let A_carros = []

const removerCarro = (e)=>{
    A_carros = A_carros.filter((a)=>{
        return a.nome != e
    })
}

tipo_kart.addEventListener('click',(e)=>{
    f_peso.removeAttribute("disabled")
    f_velocidade.removeAttribute('disabled')
})

tipo_normal.addEventListener('click',(e)=>{
    f_peso.value = ''
    f_velocidade.value = 0
    f_peso.setAttribute("disabled",'disabled')
    f_velocidade.setAttribute('disabled','disabled')
})

const gerenciarCarros = (e) =>{
    carros.innerHTML =''
    A_carros.map((c)=>{
        const div = document.createElement('div')
        const bt_remover = document.createElement('button')
        div.classList.toggle('carro')
        div.setAttribute('data-nome',c.nome)
        bt_remover.classList.toggle('remover')
        div.innerHTML = `Nome: ${c.nome}`
        bt_remover.innerHTML = 'Remover'
        bt_remover.addEventListener('click',(e)=>{
            const ElementRemover = e.target.parentNode.dataset.nome
            removerCarro(ElementRemover)
            gerenciarCarros()
        })
        carros.appendChild(div)
        div.appendChild(bt_remover)
    })

}

adicionar.addEventListener('click',(e)=>{
    if(tipo_normal.checked){
        const c = new Carro(f_nome.value,f_portas.value)
        A_carros.push(c)
    } else{
        const c = new Esportivo(f_nome.value,f_portas.value,f_peso.value,f_velocidade.value)
        A_carros.push(c)
    }
    gerenciarCarros()
    f_nome.value = ''
    f_peso.value = ''
    f_portas.value = 0
    f_velocidade.value = 0
})



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
    constructor(nome,portas,peso,velocidade){
        super(nome,portas)
        //this.drift = drift
        this.peso = peso
        this.velocidade = velocidade
    }
}

const CarroNormal = new Carro('Celta',4)
CarroNormal.setCor('Vermelho')
CarroNormal.ligar()

console.log(`Nome: ${CarroNormal.nome}`)
console.log(`Cor: ${CarroNormal.cor}`)
console.log(`Portas: ${CarroNormal.portas}`)
console.log(`Ligado: ${(CarroNormal.ligar?'SIM':'NÃO')}`)
console.log('------------------------------')

//const Kart = new Esportivo('Blooper Kart',0,'bom','Leve','Ideal')
// Kart.setCor('Branco')
// Kart.ligar()
// Kart.vel = 150

console.log(`Nome: ${Kart.nome}`)
console.log(`Cor: ${Kart.cor}`)
console.log(`Portas: ${Kart.portas}`)
console.log(`Ligado: ${(Kart.ligar?'SIM':'NÃO')}`)
console.log(`Velocidade: ${Kart.vel}`)
console.log(`Peso: ${Kart.peso}`)
console.log(`Dirigibilidade: ${Kart.dirigibilidade}`)
//console.log(`Drift: ${Kart.drift}`)
console.log('------------------------------')