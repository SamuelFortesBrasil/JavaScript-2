const Pessoa = {
    nome:'',
    idade:'',
    getNome: function(){
      return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    },
    

}

let ListaNomes = []

const addNome = ()=>{
    resposta.innerHTML = ''
    ListaNomes.map((p)=>{
        const div = document.createElement('div')
        div.classList.toggle('pessoa')
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}`
        resposta.appendChild(div)
    })
}

const adicionar = document.getElementById('bt_add')
const resposta = document.querySelector('.res')

adicionar.addEventListener('click',(e)=>{
    const nome = document.getElementById('f_nome')
    const idade = document.getElementById('f_idade')
    Pessoa['nome'] = nome.value
    Pessoa['idade'] = idade.value
    ListaNomes.push({...Pessoa})
    nome.value= ''
    idade.value = ''
    addNome()
    nome.focus()
})


