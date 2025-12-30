const Imagem = document.getElementById('Imagens')
let t = 0

const Invervalo = setInterval(()=>{
    Imagem.src = `foto-${t}.png`
    t++
    if(t === 6){
        t = 0
    }
}, 1500,t)




window.onload = Invervalo