const res = document.getElementById('res')
const botao = document.getElementById('bt')
let nClique = 0
botao.addEventListener('click', () =>{
     nClique ++
        res.innerHTML = `${nClique} cliques`
        if(nClique === 51){
            alert('Você não cansou o dedo ?')
        }
        if(nClique === 101){
            alert('Que Persistência.....')
        }
        if(nClique === 1000){
            alert('Demorou, mas você chegou ao clique número mil, Parabéns!')
        }
})