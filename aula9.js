/*let linguagens = ['html','Java','PHP','Css']
linguagens.map()*/
let el = document.getElementsByTagName('div')
el = [...el]
el.map((e,i) =>{
    e.innerText = 'Samuel Fortes Brasil'
})