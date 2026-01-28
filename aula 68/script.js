const configDataGrid = {
     endpoint : "produtos.json",

}

const divPrincipal = document.getElementById('dados')


async function consumo(configDataGrid) {
    try{
        const consumir = await fetch(configDataGrid.endpoint)
        const dados = await consumir.json()
        divPrincipal.innerHTML = " "
        
        dados.forEach(e => {
            const divLinha = document.createElement('div')
            divLinha.classList.add('dataLinha')

            const divc1 = document.createElement('div')
            divc1.classList.add('c1')
            divc1.innerHTML = e.id
            divLinha.appendChild(divc1)


            const divc2 = document.createElement('div')
            divc2.classList.add('c2')
            divc2.innerHTML = e.produto
            divLinha.appendChild(divc2)


            const divc3 = document.createElement('div')
            divc3.classList.add('c3')
            divc3.innerHTML = e.marca
            divLinha.appendChild(divc3)


            const divc4 = document.createElement('div')
            divc4.classList.add('c4')
            divc4.innerHTML = e.modelo
            divLinha.appendChild(divc4)


            const divc5 = document.createElement('div')
            divc5.classList.add('c5')
            divLinha.appendChild(divc5)

            const Delete = document.createElement('img')
            Delete.classList.add('icon')
            Delete.setAttribute('src','delete.svg')
            Delete.addEventListener('click',(e)=>{
                e.target.parentNode.parentNode.firstChild.innerHTML
            })
            divc5.appendChild(Delete)

            const edit = document.createElement('img')
            edit.classList.add('icon')
            edit.setAttribute('src','edit.svg')
            divc5.appendChild(edit)

            const view = document.createElement('img')
            view.classList.add('icon')
            view.setAttribute('src','view.svg')
            divc5.appendChild(view)

            divPrincipal.appendChild(divLinha)
        });
    } catch(erro){
        console.error('Não foi possível analisar',erro)
    }
}

consumo(configDataGrid)


