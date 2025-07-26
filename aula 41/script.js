const relogio = document.getElementById('relogio')

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
}

const intervalo = setInterval(MinhaHora,1000)

