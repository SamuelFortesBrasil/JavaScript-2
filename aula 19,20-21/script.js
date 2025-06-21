const copiar = document.getElementById('copiar')
const adicionar = document.getElementById('adicionar')
const cursos = ['Html','Css','Java','Javascript','C++','React','Angular']
const caixaCursos = document.getElementById('caixa02')
const remover = document.getElementById('remover')
const addAntes = document.querySelector('#adicionarA')
const addDepois = document.querySelector('#adicionarD')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const criarNovaOpcao = (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const radBotao = document.createElement('input')
    radBotao.setAttribute('type','radio')
    radBotao.setAttribute('name','radBotao')
    comandos.appendChild(radBotao)

    novoElemento.appendChild(comandos)
    return novoElemento

}

cursos.map((e,i)=>{
    const novoElemento = criarNovaOpcao(e)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const RadioSelec = () =>{
     const tdRad =  [...document.querySelectorAll('input[type = radio]')]
       const RadSelc = tdRad.filter((e,i,a)=>{
            return e.checked
      })
      return RadSelc[0]
}


copiar.addEventListener('click',(e)=>{
    const rdSelc = RadioSelec()
    if(rdSelc == undefined){
        alert('Selecione uma opção antes de prosseguir')
    }else{
        const cursoSelecionado = rdSelc.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    }
})

remover.addEventListener('click',(e)=>{
    const rdSelc = RadioSelec()
    if(rdSelc != undefined){
         const cursoSelecionado = rdSelc.parentNode.parentNode
         cursoSelecionado.remove()
    }else{
        alert('Por favor selecione uma opção')
    }


})

addAntes.addEventListener('click',(e)=>{
    const rdSelc = RadioSelec()
    if(rdSelc == undefined){
        alert('Selecione uma opção antes de prosseguir')
    }else{
        if(nomeCurso.value ==''){
            alert('Você deve digitar algo antes de adicionar!')
        }else{
            const cursoSelecionado = rdSelc.parentNode.parentNode
            const novaOpcao = criarNovaOpcao(nomeCurso.value)
            caixaCursos.insertBefore(novaOpcao,cursoSelecionado)
        }
    }

})

addDepois.addEventListener('click',(e)=>{
        const rdSelc = RadioSelec()
    if(rdSelc == undefined){
        alert('Selecione uma opção antes de prosseguir')
    }else{
        if(nomeCurso.value == ''){
            alert('Você deve digitar algo antes de adicionar!')
        }else{
            const cursoSelecionado = rdSelc.parentNode.parentNode
            const novaOpcao = criarNovaOpcao(nomeCurso.value)
            caixaCursos.insertBefore(novaOpcao,cursoSelecionado.nextSibling)
        }
    }

})





