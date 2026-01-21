const bt = document.getElementById('bt')
let imagem = document.getElementById('imagem')

async function procurarFoto() {
    try{
       let foto = await fetch('https://dog.ceo/api/breeds/image/random')
       let dados = await foto.json()
       if(dados.status === 'failure'){
           throw new Error ('Algo Inesperado aconteceu. Tente novamente mais tarde!')
        }
        imagem.src = dados.message
    } catch(erro){
        let msg = document.getElementById('erro')
        msg.innerHTML = erro
    }
}


bt.addEventListener('click',()=>{
    procurarFoto()
})