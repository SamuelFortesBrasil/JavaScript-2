const teclasNum = [...document.querySelectorAll('.num')]
const teclasOP = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const tela = document.getElementById('tela')
const teclaC = document.getElementById('tC')
const teclaLimpar = document.getElementById('tlimpar')
const resultado = document.getElementById('tresultado')

let verificarTela = true
let verificarSimbolo = true
let decimal = false

teclasNum.map((e) =>{
    e.addEventListener('click', (el) =>{
            if(el.target.innerHTML === ','){ 
                if(tela.innerHTML === '0'){
                    tela.innerHTML = '0,'
                    verificarTela = false
                    decimal = true
                }
            }
            if(verificarTela == true){
                tela.innerHTML = el.target.innerHTML
                verificarTela = false
            }else{
                tela.innerHTML += el.target.innerHTML
            }
            if(el.target.innerHTML === ','){                  
                if(decimal == true){
                    tela.innerHTML = tela.innerHTML.slice(0,-1)
                }  
                decimal = true            
            }

            verificarSimbolo = true
    })
})

teclasOP.map((e) =>{
    e.addEventListener('click', (el) =>{
       if(tela.innerHTML == 0){
          tela.innerHTML = 0
          verificarTela = true
          verificarSimbolo = false
        }        
       if(verificarSimbolo == true){
        tela.innerHTML += el.target.innerHTML
        //console.log("erro")
        verificarSimbolo = false
        decimal = false
        //console.log(verificarSimbolo)
       if(el.target.innerHTML == 'x'){            
         tela.innerHTML = tela.innerHTML.slice(0,-1)
         tela.innerHTML += '*'
         verificarSimbolo = false
       }        
       }   

           
    })
})

teclaLimpar.addEventListener('click',()=>{
        let ultimoValor = tela.innerHTML.slice(-1)
        tela.innerHTML = tela.innerHTML.slice(0,-1)
        //console.log(tela.innerHTML.slice(0,-1))
        //console.log(typeof(tela.innerHTML))
        if(tela.innerHTML == ''){
             tela.innerHTML += 0
             verificarTela = true
        }
        if(ultimoValor == ','){
            decimal = false
        }
        switch(ultimoValor){
            case '+' :
                verificarSimbolo = true
             //   console.log(verificarSimbolo)
            break
            case '-' :
                verificarSimbolo = true
              //  console.log(verificarSimbolo)
            break            
            case 'x' :
                verificarSimbolo = true
               // console.log(verificarSimbolo)
            break                
            case '÷' :
                verificarSimbolo = true
               // console.log(verificarSimbolo)
            break            
            
        }
})

teclaC.addEventListener('click', () =>{
    tela.innerHTML = 0
    verificarTela = true
    verificarSimbolo = false
    decimal = false
})

resultado.addEventListener('click',(e)=>{
    decimal = false
    const conversor = tela.innerHTML.replaceAll(',','.')
    const res = eval(conversor)
    tela.innerHTML = res
})
