const p_Array = document.getElementById('array')
const botaoPesquisar = document.getElementById('botaoPesquisar')
const resul = document.getElementById('resultado')

const elementosArray =[21,62,32,40,23,13,51]
p_Array.innerHTML = `[${elementosArray}]`

botaoPesquisar.addEventListener('click',(e)=>{
        resul.innerHTML = 'Array não conforme'
        const retorno = elementosArray.every((e,i)=>{
            if(e < 18){
                resul.innerHTML = `Array não conforme na posição ${i +1}`
            }

            return e >= 18
        })
        if(retorno){
            resul.innerHTML = 'Tudo certo'
        }
})