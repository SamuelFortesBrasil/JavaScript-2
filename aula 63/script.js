const bt_tema = document.getElementById('bt')
const body = document.querySelector('body')
let tema = localStorage.getItem('tema')
let verificaTema = tema



window.addEventListener('load',()=>{
    //localstorage vai retornar uma string!!!!
    //Então devemos comparar com uma
    if(verificaTema === "true"){
        body.classList.add('escuro')
        verificaTema = true
    }else{
        verificaTema = false
    }
})

bt_tema.addEventListener('click',()=>{
    if(!verificaTema){
        body.classList.add('escuro')
        verificaTema = true
        //diz que o tema escuro está ativo
        localStorage.setItem('tema',verificaTema)
    }else{
        verificaTema = false
        body.classList.remove('escuro')
        //desativa o tema escuro
        localStorage.setItem('tema',verificaTema)
    }
})