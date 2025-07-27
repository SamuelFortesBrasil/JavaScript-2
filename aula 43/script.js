const olhos = [...document.getElementsByClassName('olho')]


let posi_mouse_x = 0
let posi_mouse_y = 0

window.addEventListener('mousemove',(e)=>{
    posi_mouse_x = e.clientX
    posi_mouse_y = e.clientY
    //console.log(posi_mouse_x)
   // console.log(posi_mouse_y)
    const rotacao = Math.atan2(posi_mouse_y,posi_mouse_x) * 180 / Math.PI

   olhos.map((o)=>{
        o.style.transform = "rotate("+rotacao+"deg)"
   })
})

