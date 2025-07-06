// class Pessoa{
//     constructor(pnome){
//         this.nome = pnome
//     }
// }

// let p1 = new Pessoa('Samuel')
// let p2 = new Pessoa('Fortes')
// let p3 = new Pessoa('Brasil')


// console.log(p1.nome)
// console.log(p2.nome)
// console.log(p3.nome)
// console.log(typeof(p1,p2,p3))

class carro{
    constructor(pNome,pTipo){
        this.nome = pNome
        if(pTipo == 1){
            this.Tipo = 'Esportivo'
            this.vMax = 180
        } else if(pTipo == 2){
            this.Tipo = 'Utilitario'
            this.vMax = 150
        } else if(pTipo == 3){
            this.Tipo = 'Normal'
            this.vMax = 100
        } else{
            this.Tipo = 'Valor Invalido'
        }
    }

}

let c1 = new carro('Blooper Car', 1)
let c2 = new carro('Vaccum Star', 2)
let c3 = new carro('Rambi DK Car', 3)
let c4 = new carro('Mario kart', 4)

console.log(c1.nome)
console.log(c1.Tipo)
console.log(c1.vMax)
console.log(c2.nome)
console.log(c3.nome)
console.log(c4.nome)