const p_Array = document.getElementById('array')
const botaoPesquisar = document.getElementById('botaoPesquisar')
const resul = document.getElementById('resultado')

const elementosArray =[2,3,5,6,1]
p_Array.innerHTML = `[${elementosArray}]`

botaoPesquisar.addEventListener('click',(e)=>{
        resul.innerHTML = 'Array não conforme'
        const retorno = elementosArray.some((e,i)=>{
            if(e < 18){
                resul.innerHTML = `Array não conforme na posição ${i +1}`
            }

            return e >= 18
        })
        if(retorno){
            resul.innerHTML = 'Tudo certo'
        }
})