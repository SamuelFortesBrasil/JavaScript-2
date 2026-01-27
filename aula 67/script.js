const time = document.getElementById('timer')
const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const zerar = document.getElementById('zerar')

let invervalo = null
let dataInicial = null

const contador = () =>{
    let dataAtual = Date.now()
   // let cont = dataAtual - dataInicial
    let seg = (dataAtual - dataInicial) / 1000
    time.innerHTML = converter(seg)
}

const converter = (seg)=>{
    const hora = Math.floor(seg / 3600)
    const resto = seg % 3600
    const minuto = Math.floor(resto / 60)
    const segundo = Math.floor(resto % 60)
    const formatar = (hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)
    return formatar
}

iniciar.addEventListener('click',()=>{
    invervalo =setInterval(contador,1000)
    dataInicial = Date.now()
})

parar.addEventListener('click',()=>{
   clearInterval(invervalo) 
})

zerar.addEventListener('click',()=>{
    time.innerHTML = "00:00:00"
    clearInterval(invervalo)
})
