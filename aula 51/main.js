import { contatos } from "./bancoContatos.js";
import c from "./contatos.js";

const listaContatos = document.getElementById('listaContatos')
const botao = document.getElementById('bt-gravar')

botao.addEventListener('click',(e)=>{
    const cont ={
        nome: document.getElementById('nome').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value
    }
    c.addContato(cont,listaContatos)
    console.log(contatos)
})
