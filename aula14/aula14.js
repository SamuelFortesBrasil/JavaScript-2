const clicou = () =>{
    alert('Clicou!')
}
const c3 = document.getElementById('c3')
console.log(c3)
c3.addEventListener('click', clicou)

function correto(){
    alert('Deu Certo! Eu estava certo!')
}

const c10 = document.getElementById('c10')
console.log(c10)
c10.addEventListener('click', correto)
//Da para reutilizar funções já criadas com os ouvintes!
//Sejam elas anônimas ou não.