const caixa01 = document.getElementById('caixa01')
const caixa02 = document.getElementById('caixa02')
const botao = document.getElementById('bt-copiar')
const tdCursos = [...document.querySelectorAll('.curso')]

tdCursos.map((e) =>{
    e.addEventListener('click',(el) =>{
       const curso = el.target
       curso.classList.add('selecionado')
    })
}) //Percorre o array inicial das divs de cursos

botao.addEventListener('click',() =>{
    const cursoSelc = [...document.querySelectorAll('.selecionado')]
      cursoSelc.map((a) =>{
            caixa02.appendChild(a) 
      })
    }) // Adiciona um evento ao botão copiar, fazendo as divs
      // selecionadas ganharem uma nova classe, a 'selecionado'

caixa02.addEventListener('click',(e) =>{
    if(caixa02.children.length > 0 && e.target !== caixa02){
    const acionou = e.target
    caixa01.appendChild(acionou)
    acionou.classList.remove('selecionado')
    }
  }) // Adiciona um outro evento, dessa vez remove a classe dos elementos caso sejam selecionados de novo, além disso faz eles voltarem para a caixa 1. 
  // E o mais importante dele, ele só ocorre quando cumprir a estrutura condicional IF


//  if(nElementos.length > 0 ){
//      const JaAdd = [...document.querySelectorAll('.selecionado')]
//             JaAdd.map((b) =>{
//             b.addEventListener('click', (b) =>{
//                 b.classList.remove('selecionado')
//                 caixa01.appendChild(b)
//             })    
//     })
//  }



//Desafio que ficou, fazer voltar para a caixa 1 os elementos que tiverem a classe 'selecionados' removida.