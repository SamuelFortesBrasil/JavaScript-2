var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var c6 = document.getElementById('c6')

let coleC = [c1,c2,c3,c4,c5,c6]
if(coleC.length = 6){
    coleC.map((e) =>{
        console.log(e)
        e.innerHTML = 'Samuel Fortes Brasil'
    })
}