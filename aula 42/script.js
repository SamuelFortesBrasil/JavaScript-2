const relogio = document.getElementById('relogio')
const ativar = document.getElementById('ativar')
const parar = document.getElementById('parar')
const horaAlarme = document.getElementById('hora_alarme')
const tempoAlarme = document.getElementById('tempoAlarme')
const timer = document.querySelector('#timer')

let som_alarme = new Audio('SUPER MARIO - Running out Of Time - sound effect.mp3')
som_alarme.loop = -1

   console.log(tempoAlarme)

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

ativar.addEventListener('click',()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tempoAlarme.value * 1000)
    alarme_ativado = true
    console.log(ts_alarme)
    const dt_alarme = new Date(ts_alarme)
    horaAlarme.innerHTML = `Hora do Alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

parar.addEventListener('click',()=>{
    alarme_ativado = false
    alarme_tocando = false
    horaAlarme.innerHTML  = 'Hora do Alarme:'
    tempoAlarme.value = 0
    timer.classList.remove('alarme')
    som_alarme.pause();
    som_alarme.currentTime = 0;

})


const MinhaHora = ()=>{
    const data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    hora = hora < 10?'0' + hora: hora
    minutos = minutos< 10?'0' + minutos: minutos
    segundos = segundos < 10?'0' + segundos: segundos
    
    const horaCompleta  = `${hora}:${minutos}:${segundos}`
    relogio.innerHTML = horaCompleta

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.toggle('alarme')
        }
    }
}

const intervalo = setInterval(MinhaHora,1000)

