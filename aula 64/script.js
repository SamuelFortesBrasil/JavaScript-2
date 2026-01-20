const NaoSeiCep = document.getElementById('bt-cep')
const enviar = document.getElementById('enviar')
const cep = document.getElementById('cep')
const resp = document.getElementById('resposta')
const estado = document.getElementById('UF')
const logradouro = document.getElementById('local')
const cidade = document.getElementById('Cidade')

NaoSeiCep.addEventListener('click',()=>{
    if(document.getElementById('sub-menu').style.display == 'none'){
        document.getElementById('sub-menu').style.display = 'flex'
    }else{
        document.getElementById('sub-menu').style.display = 'none'
    }
})


cep.addEventListener('input',() =>{
    if(/\D/g.test(cep.value)){
        cep.setCustomValidity('Insira Somente Números!')
        cep.reportValidity()
        cep.value = ''
    }else{
        cep.reportValidity('')
        cep.setCustomValidity('')
    }
})


async function ProcurarCep(){
    let url = `https://viacep.com.br/ws/${cep.value}/json/`
    if(document.getElementById('sub-menu').style.display == 'flex'){
        url = `https://viacep.com.br/ws/${estado.value.toUpperCase()}/${cidade.value}/${logradouro.value}/json/`
    }
    try{
        const resposta = await fetch(url)
         let dados = await resposta.json()

        if(Array.isArray(dados)){
            dados = dados[0]
        }

        if(!dados || dados.erro){
            resp.innerHTML = 'CEP não encontrado!'
            cep.value = ''
            return
        }
        resp.innerHTML = `CEP: ${dados.cep} Logradouro: ${dados.logradouro} Bairro: ${dados.bairro} Cidade: ${dados.localidade} - ${dados.uf}.`
    }
    catch(erro){
        console.error('Erro ao buscar o cep',erro)
        alert('Erro na Conexão com o serviço de procurar CEP!')
        cep.value = ''
    }
}

enviar.addEventListener('click',(e)=>{
    e.preventDefault()
    ProcurarCep()
})