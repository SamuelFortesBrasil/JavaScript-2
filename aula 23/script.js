const caixaPesquisar = document.getElementById('txtPesquisar')
const p_Array = document.getElementById('array')
const botaoPesquisar = document.getElementById('botaoPesquisar')
const resul = document.getElementById('resultado')

const elementosArray =[1,2,32,40,23,132,323]
p_Array.innerHTML = `[${elementosArray}]`

botaoPesquisar.addEventListener('click',(e)=>{
    elementosArray.find((e,i)=>{
            if(e == caixaPesquisar.value){
                resul.innerHTML = `Valor ${e} encontrado na posição ${i +1}`
                return e

            }else{
                resul.innerHTML = `Valor não encontrado`
            }
        if(caixaPesquisar.value.length == 0){
            resul.innerHTML = 'Valor vazio, por favor preencha a caixa de pesquisar'
            
        }
    })
})