const numero = document.getElementById('numero')
const p = document.getElementById('promessa')

p.addEventListener('click',(e)=>{
    promise()

    .then((u)=>{
    numero.innerHTML = u
    numero.classList.remove('erro')
    numero.classList.add('ok')    
    })


    .catch((u)=>{
    numero.innerHTML = u
    numero.classList.add('erro') 
    numero.classList.remove('ok')
    })
})

const promise = () =>{

let promessa = new Promise((e,r)=>{
    let resultado = true
    let tempo = 3000 
    setTimeout(()=>{
        if(resultado){
            e('Tudo Certo')
        }else{
            r('Tudo Errado')
        }
    }, tempo)    
})
 
numero.innerHTML = 'Processando...'
 return promessa
}

// if(resultado){
//     numero.innerHTML = 'Tudo certo'
//     numero.classList.remove('erro')
//     numero.classList.add('ok')
// }else{
//     numero.innerHTML = 'Tudo errado'
//     numero.classList.add('erro') 
//     numero.classList.remove('ok')   
// }

numero.innerHTML = 'Esperando'
