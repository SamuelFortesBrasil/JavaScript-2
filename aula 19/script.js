const copiar = document.getElementById('copiar')
const adicionar = document.getElementById('adicionar')
const cursos = ['Html','Css','Java','Javascript','C++']
const caixaCursos = document.getElementById('caixa02')

cursos.map((e,i)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+i)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = e

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const radBotao = document.createElement('input')
    radBotao.setAttribute('type','radio')
    radBotao.setAttribute('name','radBotao')
    comandos.appendChild(radBotao)

    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
})




copiar.addEventListener('click',(e)=>{
 const tdRad =  [...document.querySelectorAll('input[type = radio]')]
    let RadSelc = tdRad.filter((e,i,a)=>{
            return e.checked
    })
    RadSelc = RadSelc[0]
    const cursoSelecionado = RadSelc.parentNode.previousSibling.textContent
    alert(`Curso Selecionada: ${cursoSelecionado}`)
})