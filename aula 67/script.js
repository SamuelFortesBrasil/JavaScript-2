const time = document.getElementById('timer')
let dataInicial = Date.now()


const contador = () =>{
    let dataAtual = Date.now()
    let cont = dataAtual - dataInicial
    let seg = Math.floor((dataAtual - dataInicial) / 1000)
    console.log(seg)
}

setInterval(contador,1000)