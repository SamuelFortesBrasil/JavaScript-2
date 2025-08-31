const objetos = document.getElementById('objetos')

const pessoa = {
    nome: "Samuel",
    idade: 17,
    peso: 82,
    meta: "Aprender Java",
    geral :function(){
        console.log(this.nome)
        console.log(this.meta)
        console.log(this.idade)
    }
}

objetos.innerHTML = `${pessoa.nome}</br>${pessoa.idade}</br>${pessoa.peso}</br>${pessoa.meta}</br>`

pessoa.geral()