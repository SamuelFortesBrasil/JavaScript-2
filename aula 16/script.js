let caixa = document.getElementById('caixa')
const ItensP = [...document.getElementsByClassName('.curso')]

const novoElemento = document.createElement('div')
novoElemento.innerHTML = 'React'
novoElemento.setAttribute('id','c14')
novoElemento.setAttribute('class','curso c1')

caixa.appendChild(novoElemento)