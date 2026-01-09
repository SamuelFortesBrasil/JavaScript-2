const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const x = document.getElementById('posicaoX')
const y = document.getElementById('posicaoY')
const altura = document.getElementById('altura')
const largura = document.getElementById('largura')

function info(e){
    const qInfo = e.getBoundingClientRect()
    x.innerHTML = `X: ${qInfo.x}`
    y.innerHTML = `X: ${qInfo.y}`
    largura.innerHTML = `X: ${qInfo.width}`
    altura.innerHTML = `X: ${qInfo.height}`
}

q1.accessKey = "b"
q2.accessKey = "c"

q1.addEventListener('click',(e)=>{
    info(e.target)
})

q2.addEventListener('click',(e)=>{
    info(e.target)
})

