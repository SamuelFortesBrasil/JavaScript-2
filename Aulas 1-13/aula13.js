const linguagens = [...document.getElementsByClassName('curso')]
const linguagensTodo = document.querySelector('div')
const linguagensC1 = document.getElementsByClassName('curso c1')
const linguagensC2 = document.getElementsByClassName('curso c2')
const linguagensTodas = [...document.querySelectorAll('.curso')]
console.log(linguagens)
console.log(linguagensTodo)
console.log(linguagensTodas)
console.log(linguagensC1)
console.log(linguagensC2)

linguagens.map((e) =>{
    e.classList.add('destaque')
})