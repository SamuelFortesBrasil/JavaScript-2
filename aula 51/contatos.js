import { contatos } from "./bancoContatos.js";

let contato ={
        TodosContados(){
            return contatos
        },
        contato(i){
            return contatos[i]
        },
        addContato(nContato,DestinoDOM){
            const cont ={
                nome: nContato.nome,
                tel: nContato.tel,
                email: nContato.email
            }

            contatos.push(cont)
            DestinoDOM.innerHTML = ''
            
            contatos.map((c)=>{
                const div = document.createElement('div')
                div.classList.toggle('contato')
                const p_nome = document.createElement('p')
                p_nome.innerHTML = c.nome
                const p_telefone = document.createElement('p')
                p_telefone.innerHTML = c.tel
                const p_email = document.createElement('p')
                p_email.innerHTML = c.email
                div.appendChild(p_nome)
                div.appendChild(p_telefone)
                div.appendChild(p_email)
                DestinoDOM.appendChild(div)
            })

        }

}

export default contato