const copiar = document.getElementById('copiar')
const adicionar = document.getElementById('adicionar')
const cursos = ['Html','Css','Java','Javascript','C++','React','Angular']
const caixaCursos = document.getElementById('caixa02')
const remover = document.getElementById('remover')
const addAntes = document.querySelector('#adicionarA')
const addDepois = document.querySelector('#adicionarD')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0
const tirarSelecao = ()=>{
    let tdSelec = [...document.querySelectorAll('.selecionado')]
    tdSelec.map((e)=>{
        e.classList.remove('selecionado')
    })
}

const criarNovaOpcao = (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click',(e)=>{
        tirarSelecao()
        e.target.classList.toggle('selecionado')

    })
    return novoElemento

}

cursos.map((e,i)=>{
    const novoElemento = criarNovaOpcao(e)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const OpcaoSelec = () =>{
     const opcoesSelecionadas =  [...document.querySelectorAll('.selecionado')]
      return opcoesSelecionadas[0]
}


copiar.addEventListener('click',(e)=>{
    if(OpcaoSelec() == undefined){
        alert('Selecione uma opção antes de prosseguir')
    }else{
        alert(`Curso selecionado: ${OpcaoSelec().innerHTML}`)
    }
})

remover.addEventListener('click',(e)=>{
     const OS = OpcaoSelec()
    if(OS != undefined){
         OS.remove()
    }else{
        alert('Por favor selecione uma opção')
    }


})

addAntes.addEventListener('click',(e)=>{
    if(OpcaoSelec() == undefined){
        alert('Selecione uma opção antes de prosseguir')
    }else{
        if(nomeCurso.value ==''){
            alert('Você deve digitar algo antes de adicionar!')
        }else{
            const novaOpcao = criarNovaOpcao(nomeCurso.value)
            caixaCursos.insertBefore(novaOpcao,OpcaoSelec())
        }
    }

})

addDepois.addEventListener('click',(e)=>{
    if(OpcaoSelec() == undefined){
        alert('Selecione uma opção antes de prosseguir')
    }else{
        if(nomeCurso.value == ''){
            alert('Você deve digitar algo antes de adicionar!')
        }else{
            const novaOpcao = criarNovaOpcao(nomeCurso.value)
            caixaCursos.insertBefore(novaOpcao,OpcaoSelec().nextSibling)
        }
    }

})





