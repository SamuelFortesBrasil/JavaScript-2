const v1 = document.getElementById('v1')
const v2 = document.getElementById('v2')
const bt_igual = document.getElementById('igual')
const bt_adicao = document.getElementById('adicao')
const bt_subtracao = document.getElementById('subtracao')
const bt_multiplicacao = document.getElementById('multiplicacao')
const bt_divisao = document.getElementById('divisao')
const resposta = document.getElementById('saidaV')
const sinal = document.getElementById('sinal')

let calculos = [
        () =>{
          let valor1 = Number(v1.value)
          let valor2 = Number(v2.value)  
          let soma = valor1 + valor2  
          return soma
        },
                () =>{
          let valor1 = Number(v1.value)
          let valor2 = Number(v2.value)  
          let subtracao = valor1 - valor2  
          return subtracao
        },
        () =>{
          let valor1 = Number(v1.value)
          let valor2 = Number(v2.value)  
          let vezes = valor1 * valor2  
          return vezes
        },
        () =>{
          let valor1 = Number(v1.value)
          let valor2 = Number(v2.value)  
          let divisao = valor1 / valor2  
          return divisao
        },
]
let operacao = 0

bt_adicao.addEventListener('click',() =>{
    sinal.innerHTML = '+'
    calculos[0]

})

bt_subtracao.addEventListener('click',() =>{
    sinal.innerHTML = '-'
    calculos[1]
    operacao = 1
})

bt_multiplicacao.addEventListener('click',() =>{
    sinal.innerHTML = 'x'
    calculos[2]
    operacao = 2
})

bt_divisao.addEventListener('click',() =>{
    sinal.innerHTML = '÷'
    calculos[3]
    operacao = 3   
})

bt_igual.addEventListener('click',() =>{
    const resultado = calculos[operacao]()
    resposta.innerHTML = resultado
})

console.log(calculos[3])