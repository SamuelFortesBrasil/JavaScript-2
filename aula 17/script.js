let caixa = document.getElementById('caixa')
//const ItensP = [...document.getElementsByClassName('.curso')]
const elementos = ['Html','Css','Java','Javascript','Php']

elementos.map((e,c)=>{
    const novo = document.createElement('div')
    novo.innerHTML = e


    const bt_lixo = document.createElement('img')
    bt_lixo.setAttribute('src','./excluir.png')
    bt_lixo.setAttribute('class','lixo')
    novo.appendChild(bt_lixo)

    novo.setAttribute('class','curso c1')
    novo.setAttribute('id','c'+c)
    bt_lixo.addEventListener('click',(e)=>{
        caixa.removeChild(e.target.parentNode)
    })
    caixa.appendChild(novo)

})